const path = require('path');

function resolvePath(relativePath) {
    const absolutePath = path.resolve(__dirname, relativePath);

    console.log('Resolved Path--> ', absolutePath);
}

resolvePath('text-files\f1.txt');


resolvePath('text-files');

