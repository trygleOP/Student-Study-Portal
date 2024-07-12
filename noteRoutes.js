// routes/noteRoutes.js
const express = require('express');
const { getNotes, createNote } = require('../controllers/noteController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').get(protect, getNotes).post(protect, createNote);

module.exports = router;
