// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import donation controller
var donationController = require('./donationController');
// donation routes
router.route('/donations')
    .get(donationController.index)
    .post(donationController.new);

router.route('/donations/:donation_id')
    .get(donationController.view)
    .patch(donationController.update)
    .put(donationController.update)
    .delete(donationController.delete);


// Export API routes
module.exports = router;