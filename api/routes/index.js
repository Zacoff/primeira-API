const bodyParser = require('body-parser');
const test = require('./testandoRoute')

module.exports = app => {
    app.use(bodyParser.json());
    app.use(test)
    app.get('/' , (req, res) => res.send('DEU CERTO'))
}
