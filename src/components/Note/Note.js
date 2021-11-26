import React from "react"
import { Link } from "react-router-dom"
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

  const onClick = () => {
    editNote(googleId, title, body, id)
    console.log(note)
  }

  return (
    <article className="center mw5 mw6-ns hidden shadow-5 br4 mv4">
      <h1 className="f4 bg-light-blue white mv0 pv2 ba b--dashed bw3 ph3">
        {/* edit note */}

        <Link exact to="/notes/edit">
          <button onClick={onClick} className="btn edit">
            <i className="fa fa-edit"></i>
          </button>
        </Link>
        <Link exact to="/notes/">
          <button className="btn del">
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
