import React from "react"
import "./Note.scss"

const Note = ({ id, title, body, date }) => {
  console.log(date)
  return (
    <article className="center mw5 mw6-ns hidden shadow-5 br4 mv4">
      <h1 className="f4 bg-light-blue white mv0 pv2 ba b--dashed bw3 ph3">
        <div className="card-head near-black">
          <p>{title}</p>
          <small>{date}</small>
        </div>
      </h1>
      <div className="pa3 bg-washed-blue">
        <p className="f6 f5-ns lh-copy measure mv0">{body}</p>
      </div>
    </article>
  )
}

export default Note
