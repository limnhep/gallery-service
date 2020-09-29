const { Listings } = require('../database/listings');

module.exports = {
    getOneListing: (id, callback) => {
        Listings.find({listingID: id}, (err, results) => {
            if (err) {
                callback(err);
            } else {
                callback(null, results);
            };
        });
    },
    getOneRandomListing: async (callback) => {
        let randomListing;
        try {
            randomListing = await Listings.aggregate([{ $sample: { size: 1}}]).exec();
        } catch (err) {
            callback(err);
        } finally {
            callback(null, randomListing);
        }
    },
    addOneListing: (listing, callback) => {
        Listings.create(listing, (err, results) => {
            if (err) {
                callback(err);
            } else {
                callback(null, results);
            }
        });
    }
}