// src/components/Notes.js
import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const { data } = await api.get('/notes');
      setNotes(data);
    };

    fetchNotes();
  }, []);

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <li key={note._id}>{note.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notes;
