const express = require('express');
const router = express.Router();

const {
    addListing,
    getListing
} = require('../controllers/listings');

router.get('', getListing);

router.post('/', addListing);

module.exports = router;