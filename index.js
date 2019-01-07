const capture = require('./src/capture');
const compare = require('./src/compare');

const url1 = process.argv[2];
const url2 = process.argv[3];

capture(url1).then(image1 => {
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
