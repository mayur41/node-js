const jwt = require('jsonwebtoken');
const userModal = require("../../collection/userModel");
const { createHashPassword, comparePassword } = require('../../middleware');



module.exports = {
    signup: async (req) => {
        try {
            if (!req.body.email || !req.body.password || !req.body.name) {
                return ({ status: 200, data: { status: "error", message: "Please provide all required fields", data: null } });
            }
            //check user exists or not 
            let ExistingUser = await userModal.findOne({ email: req.body.email });
            if (ExistingUser) {
                return ({ status: 200, data: { status: "error", message: "User already exists !", data: null } });
            } else {
                const hashedPassword = await createHashPassword(req.body.password);
                const obj = {
                    name: req.body.name,
                    email: req.body.email,
                    password: hashedPassword
                }
                let userData = new userModal(obj);

                await userData.save();
                const token = jwt.sign({ userId: req.body.email }, 'as#ndjadsa#@dsad$##k%*#MK!@', {
                    expiresIn: '1h',
                });
                let resData = {
                    name: req.body.name,
                    email: req.body.email,
                    authToken: token,
                }
                return ({ status: 200, data: { status: "success", message: "User Register Successfully", data: resData } });
            }
        } catch (error) {
            return ({ status: 400, data: "Login failed" });
        }
    },

    login: async (req) => {
        try {
            let userData = await userModal.findOne({ email: req.body.email });
            if (userData && await comparePassword(req.body.password, userData.password)) {
                const token = jwt.sign({ userId: req.body.email }, 'as#ndjadsa#@dsad$##k%*#MK!@', {
                    expiresIn: '1h',
                });

                let resData = {
                    name: userData.name,
                    email: userData.email,
                    authToken: token,
                }
                return ({ status: 200, data: { status: 'success', data: resData } });
            } else {
                return ({ status: 200, data: { status: 'error', message: 'User not found' } });
            }
        } catch (error) {
            return ({ status: 400, data: "Login failed" });
        }
    }
}