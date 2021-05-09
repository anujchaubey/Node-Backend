const db = require("../connection/connection")
const becryptFunc = require("./../bcryptFunction/bcrypt"); //https://www.npmjs.com/package/bcrypt npm i bcrypt

async function signUpuser(data) {
    //-------------------------This method isnt use sql injection--------------------Simple Insert
    //let keys = Object.keys(data).join(',');
    //let values = Object.values(data).join("','");
    // var insertquery = `INSERT INTO  login(` + keys + `) VALUES('` + values + `')`;
    //let dataadminbackto = await dbQuery(insertquery);
    //return dataadminbackto;
    //---------------Simple Insert END-------------------

    // -----*******************INSERT USING SQL INJECTION-----------------
    let name = data.name;
    let username = data.username;
    let pwd = data.password;
    let hashpwd = await becryptFunc.hashpassword(pwd); //convert into bcrypt
    // console.log("hashpwd", hashpwd);

    let insertquery = `INSERT INTO login SET ?`;
    let insertqueryfields = {
        name: name,
        username: username,
        password: hashpwd,
    }
    // console.log("insertquery", insertquery)
    // console.log("insertqueryfields", insertqueryfields)
    let dataadminbackto = await dbQueryFunctionparamerters(insertquery, insertqueryfields);
    return dataadminbackto;
}
async function loginUser(data) {
    let username = data.username;
    let password = data.password;

    let querydetails = `SELECT * FROM login WHERE username=?`;
    let usernames = [username];
    let dataadminbacktoUser = await dbQueryFunctionparamerters(querydetails, usernames);
    // console.log(dataadminbackto[0].password)
    // console.log(dataadminbackto.length)
    // console.log(dataadminbacktoUser)

    if (dataadminbacktoUser.length === 0) {
        let loginData = {
            "affectedRows": 0
        }
        return loginData;
    } else {
        let insertedpassword = dataadminbacktoUser[0].password;
        let comparedPassword = await becryptFunc.hashcomparepassword(password, insertedpassword); //compareing password
        if (comparedPassword == true) {
            let loginData = {
                "id": dataadminbacktoUser[0].id,
                "name": dataadminbacktoUser[0].name,
                "affectedRows": 1
            }
            return loginData;
        } else {
            let loginData = {
                "affectedRows": 0
            }
            return loginData;
        }
    }

}
module.exports = {
    signUpuser: signUpuser,
    loginUser: loginUser
}

//---------------------SIMPLE METHOD -------------------------------------------
// module.exports = {
//     signUpuser: async (data) => {
//         console.log("Modelcdfdfdfdf", data);
//         let keys = Object.keys(data).join(',');
//         let values = Object.values(data).join("','");
//         var insertquery = `INSERT INTO  login(` + keys + `) VALUES('` + values + `')`;
//         let dataadminbackto = await dbQuery(insertquery);
//         return dataadminbackto;
//     },
// }
//---------------------SIMPLE METHOD END-------------------------------------------

// -------------------------------WITHOUT SQL INJECTION---------------------------
async function dbQuery(query) {
    return new Promise((resolve, reject) => {
        db.query(query, (err, success) => {
            if (err) reject(err);
            else if (success) resolve(success);
        });
    });
}
// -------------------------------WITHOUT SQL INJECTION END---------------------------

// -------------------------------WITH SQL INJECTION---------------------------
const dbQueryFunctionparamerters = (query, fields) => {
    return new Promise((resolve, reject) => {
        db.query(query, fields, (err, success) => {
            if (err) reject(err);
            else if (success) resolve(success);
        });
    });
};
// -------------------------------WITH SQL INJECTION END---------------------------
