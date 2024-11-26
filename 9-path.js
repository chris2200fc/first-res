const path = require('path');

// displays the seperator in file paths for example / 
console.log(path.sep);

//path . join creates a file path from inputed auguments
const filePath = path.join ('/content/', 'subfolder', 'test.text');
console.log(filePath);

//path.base name gets the file name
const base = path.basename(filePath);
console.log(base);

//path . resolve uses the global __dirname to get the full path of a file
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);