const express = require('express');
const router = express.Router();
const { createUser, getUsers } = require('../controllers/client');

router.post('/cliente', createUser);
router.get('/clientes', getUsers);

module.exports = router;
