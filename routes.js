let Router = require('express-promise-router');
let Locations = require('./models/sites')

let router = new Router();

// GET /
router.get('/', async(request, response) => {

  response.render('home', {title:'Home'});
});

router.get('/organizations', async(request, response) => {
  let location = await Locations.query().select('*');
  response.render('organizations', {location, title:'Organizations'});
});

router.get('/cce', async(request, response) => {

  response.render('cce', {title:'CCE'});
});

router.get('/summer', async(request, response) => {

  response.render('summer', {title:'Summer'});
});

router.get('/search', async(request, response) => {
  let searchTerm = request.query.term;

  let locations = await Locations.query()
    .where('name', 'ilike', `%${searchTerm}%`);

  response.render('search', {locations, searchTerm})
})

module.exports = router;
