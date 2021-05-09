// const db = require("../dbConnection/userConnection")

// module.exports = {
//     addproductData: async (data) => {
//         let keys = Object.keys(data).join(',');
//         let values = Object.values(data).join("','");
//         var insertquery = `INSERT INTO tbl_products(` + keys + `) VALUES('` + values + `')`;
//         let dataadminbackto = await dbQuery(insertquery);
//         return dataadminbackto;
//     },
// }
// async function dbQuery(query) {
//     return new Promise((resolve, reject) => {
//         db.query(query, (err, success) => {
//             if (err) reject(err);
//             else if (success) resolve(success);
//         });
//     });
// }