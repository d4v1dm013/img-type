# img-type
A simple image type detector for nodejs

## Installation
`npm install @d4v1dm013/img-type`

## Usage

var imgType = require('@d4v1dm013/img-type');

var imgType.getType(currentFile).then((filetype) => {
    console.log("IMG TYPE : "+filetype)
});


Output should be `IMG TYPE : jpeg`

## Extension support
jpeg
png
gif
bmp