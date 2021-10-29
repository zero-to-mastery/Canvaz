TOGGLE_CURSOR_TRACKING_KEY = 'q'

const FLOOR = 0
const WALL = 1
const SRC = 2
const DEST = 3
const FINAL_PATH = 4
const PREV_PATH = 5
const POSSIBLE_PATH = 6

const canvas = document.getElementById('display')
const ctx = canvas.getContext('2d')

/**
 * @param {number} max exclusive
 * @returns {number} Any whole number between 0 and max
 */
const rnNum = (max) => Math.floor(Math.random() * max)
const rnColor = () => `rgb(${rnNum(256)}, ${rnNum(256)}, ${rnNum(256)})`
const randomizeTileColors = () => new Array(7).fill(0).map(v => rnColor())

const colorRect = (X,Y, boxWidth, boxHeight, fillColor) => {
	ctx.fillStyle = fillColor;
	ctx.fillRect(X,Y, boxWidth, boxHeight);
}

//#region input events
const handleCursorTrackingToggle = (e, lblCursor) => {
    if(e.key.toLowerCase() !== TOGGLE_CURSOR_TRACKING_KEY) return

    trackCursor = !trackCursor

    if(trackCursor) {
        lblCursor.textContent = 'ON'
        lblCursor.style.color = 'green'
    } else {
        lblCursor.textContent = 'OFF'
        lblCursor.style.color = 'red'
    }
}

const handleMouseHover = (e) => {
    if(!trackCursor) return

    if(dest && dest.x < rows && dest.y < cols) grid.setTile(dest.y, dest.x, prevType || FLOOR)

    const [y, x] = grid.getIndexFromCoords(e.offsetX, e.offsetY)
    dest = new Point(x, y)
    prevType = grid.setTile(dest.y, dest.x, DEST)

    if(aStar.dest.equals(dest)) return

    aStar.dest = dest
    grid.reset()
    aStar.stop()
    aStar.start()
}

const handleRandomizeGrid = () => {
    aStar.stop()
    grid.randomize()
    src = new Point(rnNum(cols), rnNum(rows))
    dest = new Point(rnNum(cols), rnNum(rows))

    grid.setTile(src.y, src.x, SRC)
    grid.setTile(dest.y, dest.x, DEST)

    aStar.src = src
    aStar.dest = dest
}

const handleRandomizeColors = () => {
    grid.tileTypes = randomizeTileColors()
    grid.drawGrid()
}

const handleCanvasSizeChange = (e) => {
    if(isNaN(e.target.value)) {
        e.target.value = canvas.width
        return
    }

    canvas.width = Number(e.target.value)
    canvas.height = Number(e.target.value)

    grid.setSize()
    grid.drawGrid()
}

const handleGridSizeChange = (e) => {
    if(isNaN(e.target.value)) {
        e.target.value = rows
        return
    }

    rows = Number(e.target.value)
    cols = Number(e.target.value)

    aStar.stop()

    grid.randomize(rows, cols)

    src = new Point(rnNum(cols), rnNum(rows))
    dest = new Point(rnNum(cols), rnNum(rows))

    grid.setTile(src.y, src.x, SRC)
    grid.setTile(dest.y, dest.x, DEST)

    aStar.src = src
    aStar.dest = dest
}
//#endregion

let rows = 25
let cols = 25

let wallSpawnChance = 25

const tileTypes = randomizeTileColors()

let grid = null
let aStar = null
let src = null
let dest = null
let prevType = null

let trackCursor = true

//#region classes
class Grid {
    arr = []
    rows = 0
    cols = 0

    size = 38
    outline = 2
    outlineColor = rnColor()

    tileTypes = []

    recentlyChanged = []

    constructor(rows, cols, tileTypes) {
        this.tileTypes = [...tileTypes]

        this.setSize()

        this.randomize(rows, cols)
    }

    randomize(rows=this.rows, cols=this.cols) {
        this.recentlyChanged = []

        this.rows = rows
        this.cols = cols

        this.setSize()

        this.arr = new Array(rows).fill(0).map(r => new Array(cols).fill(0).map(c => {
            if(rnNum(100) > 100 - wallSpawnChance) return WALL
            return FLOOR
        }))

        this.drawGrid()
    }

    setSize(outline=this.outline) {
        this.outline = outline
        this.size = canvas.width / cols - outline
    }
    
    setTile(r, c, type) {
        const prevType = this.arr[r][c]
        this.arr[r][c] = type
        this.recentlyChanged.push([r,c])
        
        this.drawTile(r, c, this.tileTypes[type])

        return prevType
    }
    
    getIndexFromCoords(x, y) {
        const gap = this.size + this.outline
        const r = this.roundCoords(Math.floor(y / gap))
        const c = this.roundCoords(Math.floor(x / gap))

        return [r,c]
    }

    //prevent cursor from reaching out of bounds
    roundCoords(pos) {
        if(pos < 0) return 0
        if(pos >= rows) return rows-1
        return pos
    }
    
    drawTile(r, c, tileColor) {
        const gap = this.size + this.outline;
        const x = c * gap;
        const y = r * gap;

        colorRect(x, y, this.size+this.outline, this.size+this.outline, this.outlineColor); //outline
        colorRect(x+this.outline-1, y+this.outline-1, this.size, this.size, tileColor); //tile
    }

    drawGrid() {
        for(let r=0; r < this.rows; r++) {
            for(let c=0; c < this.cols; c++) {
                const type = this.arr[r][c]
                this.drawTile(r, c, this.tileTypes[type])
            }
        }
    }

    reset() {
        this.recentlyChanged.forEach(pos => {
            const [r,c] = pos
            this.setTile(r, c, this.arr[r][c] > DEST ? FLOOR : this.arr[r][c])
        })

        this.recentlyChanged = []
    }
}

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    equals = (point) => {
        if(this.x === point.x && this.y === point.y)
            return true;
        return false;
    }
}

class Cell {
    f = 0;
    g = 0;
    h = 0;
    parent = null;

    constructor(point) {
        this.p = new Point(point.x, point.y);
    }

    calculateDest = (dest) => {
        const dx = Math.abs(this.p.x - dest.x);
        const dy = Math.abs(this.p.y - dest.y);

        this.h = 1 * (dx + dy) + (Math.sqrt(2) - 2 * 1) * Math.min(dx, dy);
    }

    calculateF = (cell, dest) => {
        this.g = cell.g + 1;
        this.calculateDest(dest);
        this.f = this.g + this.h;
    }
}

class AStar {
    grid = null
    src = null
    dest = null

    //fields used when calculating path
    openArr = []
    closed = []
    done = false
    interval = -1
    prevQ = null

    constructor(grid=null, src=null, dest=null) {
        this.grid = grid
        this.src = src
        this.dest = dest
    }

    //starts to search for destination and stops any intervals that started before
    start() {
        if(this.interval !== -1) clearInterval(this.interval)

        this.openArr = []
        this.closed = new Array(this.grid.rows).fill(0).map(a => new Array(this.grid.cols))
        this.done = false
        this.prevQ = null

        this.openArr.push(new Cell(this.src))
        this.interval = setInterval(() => this.step(), 1000 / 30)
    }

    stop() {
        clearInterval(this.interval)
    }

    step() {
        if((this.done || this.openArr.length <= 0) && this.interval) {
            clearInterval(this.interval);
            return;
        }

        //get the cell with the min f and pop it from the this.open list
        //then set that cell to q
        let minF = {v: Infinity, i: -1}
        let q
        this.openArr.forEach((c, i) => {
            //display which tiles are in the open arr (exclude the starting tile)
            if(!c.p.equals(src)) this.grid.setTile(c.p.y, c.p.x, POSSIBLE_PATH)

            if(c.f < minF.v) {
                minF.v = c.f
                minF.i = i
            }
        })
        // console.log('this.open list:', this.openArr)
        q = this.openArr[minF.i];
        if(!q.p.equals(src)) this.grid.setTile(q.p.y, q.p.x, FINAL_PATH) //display where path is currently at (exclude the starting tile)
        if(this.prevQ && !this.prevQ.equals(src) && !this.prevQ.equals(q.p)) this.grid.setTile(this.prevQ.y, this.prevQ.x, PREV_PATH) //display tiles that were already checked (exclude the starting tile)
        this.prevQ = new Point(q.p.x, q.p.y)
        // console.log('min f point:', q.p)

        //remove q from the this.open list
        this.openArr = this.openArr.filter((c, i) => i !== minF.i)
    
        //north
        if(this.checkSuccessor(new Point(q.p.x, q.p.y-1), q)) {
            this.done = true
            return
        }
        //south
        if(this.checkSuccessor(new Point(q.p.x, q.p.y+1), q)) {
            this.done = true
            return
        }
        //east
        if(this.checkSuccessor(new Point(q.p.x+1, q.p.y), q)) {
            this.done = true
            return
        }
        //west
        if(this.checkSuccessor(new Point(q.p.x-1, q.p.y), q)) {
            this.done = true
            return
        }
        //north-east
        if(this.checkSuccessor(new Point(q.p.x+1, q.p.y-1), q)) {
            this.done = true
            return
        }
        //north-west
        if(this.checkSuccessor(new Point(q.p.x-1, q.p.y-1), q)) {
            this.done = true
            return
        }
        //south-east
        if(this.checkSuccessor(new Point(q.p.x+1, q.p.y+1), q)) {
            this.done = true
            return
        }
        //south-west
        if(this.checkSuccessor(new Point(q.p.x+1, q.p.y+1), q)) {
            this.done = true
            return
        }
    
        this.closed[q.p.y][q.p.x] = q
    }

    checkSuccessor(successor, parent) {
        if(this.isValid(successor, parent.p) && !this.closed[successor.y][successor.x]) {
            let cell = new Cell(successor)
            cell.parent = parent
            
            //if successor is at the destination then the goal has been reached
            if(successor.equals(this.dest)) {
                // console.log(this.openArr, this.closed)
                this.tracePath(cell)
                return true
            }
    
            cell.calculateF(parent, this.dest)
            const openIndex = this.openArr.findIndex(c => cell.p.equals(c.p))
            if(openIndex !== -1 && this.openArr[openIndex].f < cell.f) return false
            const closedCell = this.closed[cell.p.y][cell.p.x]
            if(closedCell && closedCell.f < cell.f) return false
    
            // console.log('pushing cell:', cell)
            if(openIndex !== -1) this.openArr = this.openArr.filter((c, i) => i !== openIndex)
            this.openArr.push(cell)
            // console.log('new open:', open)
        } else
            return false
    }

    // isValid(point) {
    //     if(point.y >= 0 && point.y < this.grid.rows &&
    //     point.x >= 0 && point.x < this.grid.cols) {
    //         if(this.grid.arr[point.y][point.x] !== WALL) {
    //             return true
    //         }
    //     }

    //     return false
    // }

    inBounds = (point) => {
        if(point.y >= 0 && point.y < this.grid.rows &&
           point.x >= 0 && point.x < this.grid.cols)
            return true;
        
        return false;
    }
    
    //return true if point is not out of bounds
    //and is not on a wall
    isValid = (point, parent) => {
        //check if out of bounds
        if(this.inBounds(point)) {
            //check if in a wall
            if(this.grid.arr[point.y][point.x] !== WALL) {
                //check if its diagonal from parent to check if 2 walls are blocking it
                if(point.x !== parent.x && point.y !== parent.y) {
                    const nearX = new Point(parent.x + (point.x - parent.x), parent.y);
                    const nearY = new Point(parent.x, parent.y + (point.y - parent.y));
                    if(this.inBounds(nearX) && this.inBounds(nearY)) {
                        if(this.grid.arr[nearX.y][nearX.x] === WALL && this.grid.arr[nearY.y][nearY.x] === WALL) {
                            return false;
                        }
                    }
                }
                return true;
            }    
        }
    
        return false;
    }

    tracePath(cell) {
        // console.log(cell)
        let root = cell.parent
        while(root.parent) {
            this.grid.setTile(root.p.y, root.p.x, FINAL_PATH) //display the shortest path
            root = root.parent
        }
    }
}
//#endregion

onload = () => {
    const body = document.getElementsByTagName('body').item(0)
    const btnGrid = document.getElementById('random-grid')
    const btnColors = document.getElementById('random-colors')
    const txtCanvas = document.getElementById('size-canvas')
    const txtGrid = document.getElementById('size-grid')
    const lblCursor = document.getElementById('label-cursor')

    canvas.width = innerHeight
    canvas.height = innerHeight

    txtCanvas.value = innerHeight
    txtGrid.value = rows

    lblCursor.style.color = 'green'
    
    src = new Point(rnNum(cols), rnNum(rows))
    dest = new Point(rnNum(cols), rnNum(rows))

    grid = new Grid(rows, cols, tileTypes)
    grid.setTile(src.y, src.x, SRC)
    grid.setTile(dest.y, dest.x, DEST)

    body.style.backgroundColor = grid.outlineColor

    aStar = new AStar(grid, src, dest)

    addEventListener('keypress', (e) => handleCursorTrackingToggle(e, lblCursor))
    canvas.addEventListener('mousemove', handleMouseHover)
    btnGrid.addEventListener('click', handleRandomizeGrid)
    btnColors.addEventListener('click', handleRandomizeColors)
    txtCanvas.addEventListener('change', handleCanvasSizeChange)
    txtGrid.addEventListener('change', handleGridSizeChange)
}