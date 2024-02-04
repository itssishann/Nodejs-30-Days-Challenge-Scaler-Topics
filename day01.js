const fs = require ("fs")
function readFileContent(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file`);
        } else {
            console.log(`File Content --> \n${data}`);
        }
    });
}
readFileContent("text-files\\f2.txt") 
readFileContent("text-files\\f1.txt")
readFileContent("text-files\\f3.txt")