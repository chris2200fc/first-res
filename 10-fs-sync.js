const {readFileSync, writeFileSync} = require('fs');
console.log('start')
// requires the file sync built in module. Reads the file into the variable
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

// requires the file sync built in module. Creates a file if there isn't already one with the same name
//the first arugument is the file name, second is the what you want to write to that new file.
// if the file already exists it overwrites the file
// there is third aurgment that you can use to append the file, set the flag to a {flag: 'a'}
writeFileSync(
    './content/result-sync.txt',
    `here is the result : ${first}, ${second}`,
    {flag: 'a'}
)
console.log('Done with this task')
console.log('Starting the next one')