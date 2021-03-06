import React, { useState } from "react"
import axios from "axios"
import { Link, useHistory } from "react-router-dom"
import "./Editnote.scss"

const Editnote = ({ note }) => {
  const history = useHistory()

  const [form, setForm] = useState({
    id: note.id,
    title: note.title,
    body: note.body,
  })

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = () => {
    console.log(note)
    axios
      .post("http://localhost:5000/notes/edit", {
        googleId: note.googleId,
        id: form.id,
        title: form.title,
        body: form.body,
      })
      .then(() => {
        history.push("/notes")
        console.log("note edited!")
      })
  }

  return (
    <div className="">
      <form className="pa4 black-80">
        <div className="holder bg-washed-blue measure center shadow-2">
          <label for="name" className="f6 b db mb2">
            Title <span className="star normal black-60">*</span>
          </label>
          <input
            id="title"
            className="input-reset ba b--black-20 pa2 mb2 db w-100"
            type="text"
            required
            aria-describedby="title"
            value={form.title}
            name="title"
            onChange={onChange}
          />

          <label for="note" className="f6 b db mb2">
            Note <span className="star normal black-60">*</span>
          </label>
          <textarea
            id="comment"
            // name="comment"
            className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
            aria-describedby="comment-desc"
            required
            value={form.body}
            name="body"
            onChange={onChange}
          ></textarea>
          {/* <label for="note" className="f6 b db mb2">
            Visibility <span className="star normal black-60">*</span>
          </label>
          <select name="Visibility" className="dropdown">
            <option value="private">Private</option>
            <option value="public">Public</option>
          </select> */}
          <br />
          <a
            className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-dark-blue"
            href="#0"
            onClick={() => {
              onSubmit()
            }}
          >
            Submit
          </a>
          <br />
          <Link exact to="/notes">
            <a
              className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-light-blue"
              href="/"
            >
              Go back
            </a>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Editnote
