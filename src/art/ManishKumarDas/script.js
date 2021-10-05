// get the canvas and the context
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

// this is the smallest dimension of the screen.
// this will help set up the canvas square with the least dimension as the square side.
let CANVAS_SIDE, GAP, SHAPE_WIDTH, SHAPE_HEIGHT, NO_OF_SIDES
NO_OF_SIDES = 5

// this is the gap at the end of the screen * 2
const WINDOW_MARGIN = 50

const canvasResize = () => {

    CANVAS_SIDE = window.innerWidth < window.innerHeight 
                    ? window.innerWidth : window.innerHeight

    // considering we have 5 rows and 5 columns and the shape_width and shape_height is 2 times the gap.
    // that gives us the equation:        (no_of_sides) * shape_width + (no_of_sides + 1) * gap = canvas_side
    //                              =>    (no_of_sides) * ( 2 * gap ) + (no_of_sides + 1) * gap = canvas_side
    //                              =>        (2 * no_of_sides) * gap + (no_of_sides + 1) * gap = canvas_side
    //                              =>                              (3 * no_of_sides + 1) * gap = canvas_side
    //                              =>                                                      gap = canvas_side / (3 * no_of_sides + 1)
    //                              =>                                shape_width, shape_height = 2 * canvas_side / (3 * no_of_sides + 1)
    
    GAP             =       CANVAS_SIDE / (3 * NO_OF_SIDES + 1)
    SHAPE_WIDTH     = 2 *   CANVAS_SIDE / (3 * NO_OF_SIDES + 1)
    SHAPE_HEIGHT    = 2 *   CANVAS_SIDE / (3 * NO_OF_SIDES + 1)

    canvas.width    = CANVAS_SIDE - WINDOW_MARGIN
    canvas.height   = CANVAS_SIDE - WINDOW_MARGIN
}

// resize the canvas
canvasResize()
window.addEventListener('resize', canvasResize)

// draw