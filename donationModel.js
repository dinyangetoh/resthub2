// donationModel.js
var mongoose = require('mongoose');
// Setup schema
var donationSchema = mongoose.Schema({
    donor: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Donation model
var Donation = module.exports = mongoose.model('donation', donationSchema);
module.exports.get = function (callback, limit) {
    Donation.find(callback).limit(limit);
}