const util = require('util');
const fs = require('fs);

const readAsync = util.promisify(fs.readFile);

async function read() {
	const file = await readAsync('./package.json');
	const data = JSON.parse(file);
	console.log(data); 
}

read();
