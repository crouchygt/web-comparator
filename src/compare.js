const path = require('path');
const {
    exec
} = require('child_process');
const {
    promisify
} = require('util');

const execAsync = promisify(exec);

module.exports = imagePaths => {
    const outputPath = path.join(__dirname, '..', 'images', 'output.png');
    return execAsync(`compare -fuzz '20%' -metric AE -highlight-color blue ${imagePaths.join(' ')} ${outputPath}`, {
        cwd: __dirname,
    }).catch(e => {
        if (e.code === 1) {
            console.log('Sites have differences');
        }
    })
};
