const fs = require('fs');

function writeToFile(filePath, content) {
    fs.writeFile(filePath, content, (err) => {
        if (err) {
            console.error(`Error writing to file: ${err.code}`);
        } else {
            console.log("Data Successfully writen at --> ",filePath);
        }
    });
}
function readFileContent(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file`);
        } else {
            console.log(`File Content --> \n${data}`);
        }
    });
}
const path = "text-files/text1.txt";
writeToFile(path,"Data Written Through Fs Module \nDay 02 Done!")
readFileContent(path)