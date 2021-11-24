import React from "react"
import { Link } from "react-router-dom"
import "./Note.scss"

const Note = ({ title, body, date }) => {
  console.log(date)
  return (
    <article className="center mw5 mw6-ns hidden shadow-5 br4 mv4">
      <h1 className="f4 bg-light-blue white mv0 pv2 ba b--dashed bw3 ph3">
        <Link exact to="/notes/edit">
          <button class="btn edit">
            <i class="fa fa-edit"></i>
          </button>
        </Link>
        <Link exact to="/notes/">
          <button class="btn del">
            <i class="fa fa-trash"></i>
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
