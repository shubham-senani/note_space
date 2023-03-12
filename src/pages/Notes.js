import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import NoteCard from './NoteCard'
export default function Notes() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/Notes")
      .then((res) => { return res.json() })
      .then(data => setNotes(data))
  }, [])

  const handleDelete = (id) => {
    fetch("http://localhost:8000/Notes/" + id, {
      method: "Delete"
    });
    const newNotes = notes.filter(note => note.id !== id)
    setNotes(newNotes);
  }


  return (
    <Container>
      <Grid container columnGap={3} rowSpacing={3}>
        {notes.map((note) =>
          <Grid key={note.id} sm={4} item>
            <NoteCard note={note} handleDelete={handleDelete} />
          </Grid>
        )}
      </Grid>
    </Container>
  )
}

