// donationController.js
// Import donation model
Donation = require('./donationModel');
// Handle index actions
exports.index = function (req, res) {
    Donation.get(function (err, donations) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Donations retrieved successfully",
            data: donations
        });
    });
};
// Handle create donation actions
exports.new = function (req, res) {
    var donation = new Donation();
    donation.donor = req.body.donor ? req.body.donor : donation.donor;
    donation.amount = req.body.amount;
// save the donation and check for errors
    donation.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'New donation created!',
                data: donation
            });
    });
};
// Handle view donation info
exports.view = function (req, res) {
    Donation.findById(req.params.donation_id, function (err, donation) {
        if (err)
            res.send(err);
        res.json({
            message: 'Donation details loading..',
            data: donation
        });
    });
};
// Handle update donation info
exports.update = function (req, res) {
    Donation.findById(req.params.donation_id, function (err, donation) {
        if (err)
            res.send(err);
        donation.donor = req.body.donor ? req.body.donor : donation.donor;
        donation.amount = req.body.amount;
// save the donation and check for errors
        donation.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Donation Info updated',
                data: donation
            });
        });
    });
};
// Handle delete donation
exports.delete = function (req, res) {
    Donation.remove({
        _id: req.params.donation_id
    }, function (err, donation) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Donation deleted'
        });
    });
};