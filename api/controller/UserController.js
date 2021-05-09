// const db = require("../dbConnection/userConnection")
const productmodel = require("../model/UserModel");
module.exports = {
    addProduct: async (req, res) => {
        try {
            let resultinsert = await productmodel.addproductData(data);
            if (resultinsert.affectedRows == 1) {
                return res.send({ responseCode: "200", responseMessage: "Product Added Successfully" });
            } else {
                return res.send({ responseCode: "500", responseMessage: "Something Went Wrong" });
            }
        } catch (error) {
            return res.send({ responseCode: "500", responseMessage: "Something Went Wrong" });
        }
    }
}