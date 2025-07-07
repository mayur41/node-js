const Ctrl = require('./controller');
const middleware = require('../../middleware');

var app = module.exports = express.Router();
app.route('/api/auth').post(Ctrl.auth);
app.route('/api/login').post(Ctrl.login);
app.route('/api/getUserList').get(middleware.checkAuth, Ctrl.getUserList);