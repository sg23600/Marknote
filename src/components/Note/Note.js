import React from "react"
import { Link, useHistory } from "react-router-dom"
import axios from "axios"

// import { Route, Switch } from "react-router-dom"
// import Editnote from "../../containers/Editnote/Editnote"

import "./Note.scss"

const Note = ({ googleId, id, title, body, note, editNote }) => {
  // useEffect(() => {
  //   if (editNote) {
  //     console.log("rendering...")
  //     editNote(googleId, title, body)
  //     // console.log(note)
  //   }
  // }, [googleId, title, body])
  const history = useHistory()

  const onEdit = () => {
    editNote(googleId, title, body, id)
    console.log(note)
  }

  const onDelete = () => {
    axios
      .post("http://localhost:5000/notes/delete", {
        googleId: googleId,
        id: id,
      })
      .then((res) => {
        history.push("/notes")
        console.log("deleted")
      })
  }

  return (
    <article className="center mw5 mw6-ns hidden shadow-5 br4 mv4">
      <h1 className="f4 bg-light-blue white mv0 pv2 ba b--dashed bw3 ph3">
        {/* edit note */}

        <Link exact to="/notes/edit">
          <button onClick={onEdit} className="btn edit">
            <i className="fa fa-edit"></i>
          </button>
        </Link>

        {/* delete note */}

        <Link exact to="/notes/">
          <button onClick={onDelete} className="btn del">
            <i className="fa fa-trash"></i>
          </button>
        </Link>
        <div className="card-head near-black">
          <p>{title}</p>
          <br />
        </div>
      </h1>
      <div className="pa3 bg-washed-blue">
        <p className="f6 f5-ns lh-copy measure mv0">{body}</p>
      </div>
    </article>
  )
}

export default Note
