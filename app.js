const fs = require('fs');

const path = 'assets/sample.mp4';
const xpath = 'assets/manipulation.js';
const stat = fs.statSync(path);
const sizes = stat.size;

console.log(sizes);
