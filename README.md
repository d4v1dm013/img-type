# img-type
A simple image type detector for nodejs

## Installation
`npm install img-type`

## Usage

```js
const imgType = require('img-type');

imgType.getType(currentFile).then((filetype) => {
    console.log("IMG TYPE : " + filetype)
});
```

Output should be `IMG TYPE : jpeg`

## Extension support
jpeg
png
gif
bmp