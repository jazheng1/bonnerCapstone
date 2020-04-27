let Router = require('express-promise-router');

let router = new Router();

// GET /
router.get('/', async(request, response) => {

  response.render('index');
});

router.get('/cce', async(request, response) => {

  response.render('cce');
});

router.get('/summer', async(request, response) => {

  response.render('summer');
});

module.exports = router;
