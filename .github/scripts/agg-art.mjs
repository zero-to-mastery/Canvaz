import fs from "fs"
import path from "path"

const JSON_SOURCE_DIR = "src/art"
const FINAL_JSON_FILE = "src/art.js"

const finalJSON = []

fs.readdirSync(path.resolve(JSON_SOURCE_DIR), { withFileTypes: true }).forEach(dir => {
    
    if (dir.isFile()) return;
    
    let artDirectory = dir.name;
    
    const artMeta = JSON.parse(fs.readFileSync(`${JSON_SOURCE_DIR}/${artDirectory}/meta.json`, "utf-8"));

    finalJSON.push({
        name: artMeta.art_name,
        page_link:`./art/${artDirectory}/index.html`,
        art_icon: `./art/${artDirectory}/icon.png`,
        author_name: artMeta.author_name,
        author_github_url: artMeta.author_github_url,
    })

});

fs.writeFileSync(
  path.resolve(FINAL_JSON_FILE),
  `
    let cards = ${JSON.stringify(finalJSON, null, 2)}

    ${fs.readFileSync(path.resolve("src/card_builder.js"))}  
  `
)
