const path = require('path');
const os = require('os');

//-----------------------
// Path Examples
//-----------------------

console.log("1) Full path of this file:");
console.log(__filename);

console.log("\n2) Directory folder of this file:");
console.log(__dirname);

console.log("\n3) File details using path.parse:");
console.log(path.parse(__filename));

console.log("\n4) Only file extension:");
console.log(path.extname(__filename));

//-----------------------
// OS Examples
//-----------------------

console.log("\n5) Operating System Info:");
console.log("OS Platform:", os.platform());
console.log("OS Type:", os.type());
console.log("Free Memory:", os.freemem());
console.log("Total Memory:", os.totalmem());
console.log("Home Directory:", os.homedir());