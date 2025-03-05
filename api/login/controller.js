const loginService = require('./service');

module.exports = {
    signup: async (req, res) => {
        const data = await loginService.signup(req);
        res.status(data.status).send(data.data)
    },

    login: async (req, res) => {
        const data = await loginService.login(req);
        res.status(data.status).send(data.data)
    }
}