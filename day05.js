const path = require('path');
function checkFileExtension(filePath, expectedExtension) {
    const actualExtension = path.extname(filePath);

    if (actualExtension === expectedExtension) {
        console.log(`File has the expected extension: ${expectedExtension}`);
    } else {
        console.log(`File does not have the expected extension. Actual extension: ${actualExtension}`);
    }
}
const filePath = '.\\text-files\\f1.txt';
const expectedExtension = '.txt';
checkFileExtension(filePath, expectedExtension);
