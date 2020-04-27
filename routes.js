let Router = require('express-promise-router');

let router = new Router();

// GET /
router.get('/', async(request, response) => {

  response.render('index');
});

module.exports = router;
