// controllers/noteController.js
const asyncHandler = require('express-async-handler');
const Note = require('../models/noteModel');

const getNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find({ user: req.user._id });
  res.json(notes);
});

const createNote = asyncHandler(async (req, res) => {
  const { title, content } = req.body;

  const note = new Note({
    user: req.user._id,
    title,
    content,
  });

  const createdNote = await note.save();
  res.status(201).json(createdNote);
});

module.exports = { getNotes, createNote };
