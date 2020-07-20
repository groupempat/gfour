const express = require('express');
const router = express.Router();

const {
    getAllBook,
} = require('./controller');

router.get('/allbooks', getAllBook);

module.exports = router;
