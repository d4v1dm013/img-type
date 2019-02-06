# img-type
A simple image type detector for nodejs

## Installation
`npm install img-type`

## Usage

##### Node.js From file
```js
const imgType = require('img-type');

imgType.getType(currentFile).then((filetype) => {
    console.log("IMG TYPE : " + filetype)
});
```

##### Node.js From buffer
```js
const imgType = require('img-type');

//some code to get a buffer fs.readFile or read-chunk for exemple

var filetype = imgType.getTypeFromBuffer(buffer);

console.log("IMG TYPE : " + filetype);
```

For a jpeg file output should be `IMG TYPE : jpeg`
For a non supported file tyoe output shold be `IMG TYPE : false`

## Supported file types
jpeg
png
gif
bmp
tiff

## License

MIT