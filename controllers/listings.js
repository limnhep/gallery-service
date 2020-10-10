const { addOneListing, getOneListing, getOneRandomListing } = require('../models/listings');

exports.getListing = (request, response) => {
    const { id } = request.params;
    console.log(request.params);
    if (id){
        getOneListing(id, (err, listing) => {
            if (err){
                response.status(404).send(err);
            } else {
                response.status(200).send(listing);
            }
        });
    } else {
        getOneRandomListing((err, listing) => {
            if (err){
                response.status(404).send(err);
            } else {
                response.status(200).send(listing);
            }
        });
    }
}

exports.addListing = (request, response) => {
    const newListing = request.body;
    addOneListing(newListing, (err, success) => {
        if (err){
            response.status(404).send(err);
        } else {
            response.status(200).send({msg: 'Successfully created a new listing.'})
        }
    });
}