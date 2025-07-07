const Ctrl = require('./controller');
const middleware = require('../../middleware');

var app = module.exports = express.Router();
app.route('/api/getTaskList').get(middleware.checkAuth, Ctrl.getTaskList);
app.route('/api/addTask').post(middleware.checkAuth, Ctrl.addTask);
app.route('/api/deleteTask').post(middleware.checkAuth, Ctrl.deleteTask);
app.route('/api/updateTask').post(middleware.checkAuth, Ctrl.updateTask);