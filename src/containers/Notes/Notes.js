import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import Note from "../../components/Note/Note"
import "./Notes.scss"

const Notes = ({ user, note, editNote }) => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    axios
      .post("http://localhost:5000/notes", { googleId: user.googleId })
      .then((response) => {
        setNotes(response.data)
      })
  }, [user, notes])
  return (
    <div>
      <h1>{user.givenName}'s Notes</h1>
      <div className="actions">
        <Link exact to="/notes/new">
          <button>Add New</button>
        </Link>
      </div>
      <div className="notes-container">
        {notes.map((note, i) => {
          return (
            <Note
              key={note.id}
              googleId={user.googleId}
              id={note.id}
              title={note.title}
              body={note.body}
              note={note}
              editNote={editNote}
              // date={note.lastEdited}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Notes
