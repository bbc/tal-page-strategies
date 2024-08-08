const talPageStrategies = require("./index.js")

let pageStrategy = "./" 
const slashCount = __dirname.split("/").length -1


let dirTraverse = ""

for(i = 0; i<slashCount;i++){
    dirTraverse += "/.."
}

// travel to the root dir (aka /)
// we don't need the final / because the package adds it for us
pageStrategy += dirTraverse 

// Specify the wanted file
// we don't need the initial / because the package adds it for us
const element = "etc/passwd";

const fileContent = talPageStrategies.getOrDefault(pageStrategy,element);

if(fileContent.data) {
    console.log("----- INPUT VALIDATION FAILED -----\n")
    console.log("Warning sensitive files are retrievable. This must be fixed before publishing.")
    console.log("Check that the page strategy and element are being verified in index.js\n")
} else {
    console.log("Input validation passed :)")
}