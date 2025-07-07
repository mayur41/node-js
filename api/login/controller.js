const loginService = require('./service');

module.exports = {
    auth: async (req, res) => {
        const data = await loginService.auth(req);
        res.status(data.status).send(data.data)
    },

    login: async (req, res) => {
        const data = await loginService.login(req);
        res.status(data.status).send(data.data)
    },

    getUserList: async (req, res) => {
        const data = await loginService.getUserList(req);
        res.status(data.status).send(data.data)
    }
};