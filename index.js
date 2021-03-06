const capture = require('./src/capture');
const compare = require('./src/compare');

const url1 = process.argv[2];
const url2 = process.argv[3];

console.log(`Capturing: ${url1}`);
capture(url1).then(image1 => {
    console.log(`Capturing: ${url2}`);
    capture(url2).then(image2 => {
        console.log('Starting Comparison');
        compare([
            image1,
            image2,
        ]).then(() => {
            console.log('Done');
        });
    });
}); 
