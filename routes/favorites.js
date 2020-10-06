const express = require('express');
const router = express.Router();

const {
    getFavorites,
    addFavorites,
    addFavoritesCategory,
} = require('../controllers/favorites');

router.get('/', getFavorites);

router.post('/', addFavoritesCategory);

router.patch('/', addFavorites);

module.exports = router;