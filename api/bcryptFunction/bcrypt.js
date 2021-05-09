
const bcrypt = require('bcrypt');//1-https://www.npmjs.com/package/bcryptjs  //2-https://www.npmjs.com/package/bcrypt 
const saltRounds = 10;
async function hashpassword(password) { //insert
    let haspwd = await bcrypt.hash(password, saltRounds);
    return haspwd;
}
async function hashcomparepassword(pwd, cmpwdhash) { //compare
    let hascomparepwd = await bcrypt.compare(pwd, cmpwdhash);
    console.log("Password is", hascomparepwd);
    return hascomparepwd;
}
module.exports = {
    "hashpassword": hashpassword,
    "hashcomparepassword": hashcomparepassword
}