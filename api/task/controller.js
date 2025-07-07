const taskService = require('./service');

module.exports = {
    getTaskList: async (req, res) => {
        const data = await taskService.getTaskList(req);
        res.status(data.status).send(data.data)
    },
    addTask: async (req, res) => {
        const data = await taskService.addTask(req);
        res.status(data.status).send(data.data)
    },
    deleteTask: async (req, res) => {
        const data = await taskService.deleteTask(req);
        res.status(data.status).send(data.data)
    },
    updateTask: async (req, res) => {
        const data = await taskService.updateTask(req);
        res.status(data.status).send(data.data)
    },
}