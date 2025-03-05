const Ctrl = require('./controller');

var app = module.exports = express.Router();
app.route('/auth/signup').post(Ctrl.signup);
app.route('/auth/login').post(Ctrl.login);