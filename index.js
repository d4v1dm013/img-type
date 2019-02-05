'use strict';

const util = require('util');
const fs = require('fs');

const readFile = util.promisify(fs.readFile);

/**
 * get file type from filepath
 * @param {string} file
 * @return {string}
 */
async function readType(file) {
  
  const filetype = await readFile(file).then((buffer) => {

      return readTypeFromBuffer(buffer);

    }).catch((error) => {
       // Handle the error.
        console.log(error);

        throw error;
    });

    return filetype;
}

/**
 * get file type from file buffer
 * @param {string} buffer
 * @return {string}
 */
function readTypeFromBuffer(buffer) {
    
    //Jpeg Img (SOI : Start of Image Hex) = FFD8 (Hex : x0FFD8)
    var SOIMarker = buffer.toString('hex', 0, 2).toUpperCase();
    if(SOIMarker == "FFD8") {
      return 'jpeg';
    }

    // PNG img : Signature Hex = 89504E470D0A1A0A
    var PNGMarker = buffer.toString('hex', 0, 8).toUpperCase();
    if(PNGMarker == "89504E470D0A1A0A") {
      return 'png';
    }

    // GIF img : Signature Hex = GIF89a OR GIF87a
    var GIFMarker = buffer.toString('ascii', 0, 6);
    if(GIFMarker == "GIF89a" || GIFMarker == "GIF87a") {
      return 'gif';
    }

    // BMP img : Signature Hex = 4D42
    var BPMMarker = buffer.toString('hex', 0, 2).toUpperCase();
    if(BPMMarker == "4D42") {
      return 'bmp';
    }

    // TIFF img : Signature Hex = 4D4D002A OR 49492A00
    var TIFFMarker = buffer.toString('hex', 0, 4).toUpperCase();
    if(TIFFMarker == "4D4D002A" || TIFFMarker == "49492A00") {
      return 'tiff';
    }

    throw  new Error('Image type is not supported, only jpeg, png, GIF, BMP, TIFF');
}

module.exports = {
  getType: function(file) {
    return readType(file);
  },

  getTypeFromBuffer: function(buffer) {
    return readTypeFromBuffer(buffer);
  }
};