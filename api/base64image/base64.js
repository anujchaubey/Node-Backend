const Buffer = require('buffer').Buffer; //install
const path = require('path'); //install
const fs = require('fs'); //install
async function base64decodesImage(filepathname, dataString, filenames,) {
    var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
        response = {};
    if (matches.length !== 3) {
        return new Error('Invalid input string');
    }
    response.type = matches[1];
    response.data = Buffer.from(matches[2], 'base64');
    let buf = response.data;
    fs.writeFile(path.join(filepathname, filenames), buf, function (error) {
        if (error) {
            throw error;
        } else {
            // console.log('File created from base64 string!');
            return filenames;
        }
    });
    return filenames;
}
module.exports = base64decodesImage;

//-------------------access this folder code for controller or model folder-------------------------------------------
// let inthenewsImg = await base64(MixedPath, news_Imageb64, Date.now() + Image_name);