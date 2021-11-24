import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import axios from "axios"
import "./Newnote.scss"

const Newnote = ({ user }) => {
  const history = useHistory()

  const [form, setForm] = useState({
    title: "",
    body: "",
  })

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = () => {
    console.log(form)
    axios
      .post("http://localhost:5000/notes/new", {
        googleId: user.googleId,
        title: form.title,
        body: form.body,
      })
      .then(() => {
        history.push("/notes")
        console.log("new note added!")
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
        </div>
      </form>
    </div>
  )
}

export default Newnote
