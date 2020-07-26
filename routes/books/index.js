const express = require('express');
const router = express.Router();
const { forwardAuthenticate, ensureAuthenticate } = require("../../config");
const {
    getAllBook,
    getByUserID,
    updateBook,
    deleteBook,
    addBook,
} = require('./controller');

router.get('/allbooks', getAllBook);
router.get('/findByUserID/:UserID', getByUserID);
router.post('/', addBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

module.exports = router;
