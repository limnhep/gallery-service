const mongoose = require('mongoose');
const { Schema } = mongoose;

const listingSchema = new Schema({
    listingID: Number,
    title: String, 
    name: String,
    location: String,
    description: String,
    quote: String,
    hostname: String,
    rating: String,
    guests: {
        type: Number,
        min: 0,
        max: 100,
    },
    bedrooms: {
        type: Number,
        min: 0,
        max: 20,
    },
    beds: {
        type: Number,
        min: 0,
        max: 20,
    },
    bathrooms: {
        type: Number,
        min: 0,
        max: 20,
    },
    superhost: Boolean,
    reviews: Number,
    gallery: {
        type: Object,
        featured: Array,
        rooms: Array,
    } 
});

const Listings = mongoose.model('Listings', listingSchema); 

module.exports = {
    Listings,
}