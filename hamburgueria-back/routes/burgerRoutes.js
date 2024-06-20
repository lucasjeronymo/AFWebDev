const express = require('express');
const { addBurger, getBurgers } = require('../controllers/burgerController');
const router = express.Router();

router.post('/', addBurger);
router.get('/', getBurgers);

module.exports = router;
