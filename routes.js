let Router = require('express-promise-router');
let Locations = require('./models/sites');
let Summer = require('./models/summer');
let Opportunities = require('./models/opportunities');

let router = new Router();

// routes for the static pages
router.get('/', async(request, response) => {

  response.render('home', {title:'Home'});
});

router.get('/cce', async(request, response) => {

  response.render('cce', {title:'CCE'});
});

// routes for search of volunteer spots in davidson area
router.get('/organizations', async(request, response) => {
  let opportunities = await Opportunities.query()
                              .withGraphFetched('organization');

  response.render('organizations', {opportunities, title:'Organizations'});
});

// search function
router.get('/search', async(request, response) => {
  let searchTerm = request.query.term;

  let opportunities = await Opportunities.query()
                              .modify('matchesSearch', searchTerm)
                              .withGraphFetched('organization');

  response.render('search', { opportunities, searchTerm })
})

// more info page
router.get('/more', async(request, response) => {
  console.log('name:', request.query.name)
  let clickedname = request.query.name;
  console.log('name:', clickedname)

  let clickedinfo = await Locations.query()
    .where(`%${clickedname}%`);


  response.render('more', {clickedinfo})
})

// routes for summer of service page
router.get('/summer', async(request, response) => {
  // let summer = await Summer.query().select('*');

  response.render('summer', {title:'Summer'});
});

// search for summer of service
router.get('/summersearch', async(request, response) => {
  let searchTerm = request.query.term;

  let summer = await Summer.query()
    .where('name', 'ilike', `%${searchTerm}%`);

  response.render('search', {summer, searchTerm})
})

module.exports = router;
