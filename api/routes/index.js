var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.send('Welcome to API!');
});

require('./AuthRoutes')(router);
// require('./CustomerRoutes')(router);
// require('./BeauticianRoutes')(router);

module.exports.router = router;