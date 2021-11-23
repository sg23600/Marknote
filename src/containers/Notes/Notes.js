import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import Note from "../../components/Note/Note"
import "./Notes.scss"

// const dummy = [
//   {
//     id: 1,
//     title: "Note 1",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum   numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam , eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, netur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet",
//     date: new Date(),
//   },
//   {
//     id: 2,
//     title: "Note 2",
//     date: new Date(),
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum   numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam , eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, netur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet",
//   },
//   {
//     id: 3,
//     date: new Date(),
//     title: "Note 3",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum   numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam , eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, netur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet",
//   },
// ]

const Notes = ({ user }) => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    axios
      .post("http://localhost:5000/notes", { googleId: user.googleId })
      .then((response) => {
        // console.log(typeof response.data[0].lastEdited)
        setNotes(response.data)
      })
  }, [user])
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
              title={note.title}
              body={note.body}
              // date={note.lastEdited}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Notes
