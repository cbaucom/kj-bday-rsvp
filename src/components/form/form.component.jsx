import React from "react"
import { navigate } from "gatsby"

import Button from "../button/button.component"
import {ButtonWrapper} from "../button/button.styles"
import CustomLink from "../link/link.component"
import { FormWrapper, Card } from "./form.styles";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      people: "1",
      message: "",
      error: "",
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = e => {
    e.preventDefault()

    if (!this.state.name || !this.state.email) {
      this.setState(() => ({
        error: "Please provide your name and email",
      }))
    } else {
      // Clear the error
      this.setState(() => ({ error: "" }))

      const form = e.target
      const name = this.state.name

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": form.getAttribute("name"), ...this.state }),
      })
        .then(() =>
          navigate(form.getAttribute("action"), {
            state: { name },
          })
        )
        .catch(error => alert(error))
    }
  }

  render() {
    return (
      <FormWrapper>
        <Card>
          <h2>RSVP</h2>
          <form
            name="contact"
            method="post"
            action="/thank-you"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            {this.state.error && (
              <p className="form-error">{this.state.error}</p>
            )}
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </div>
            <p>
              <label>
                Name:{" "}
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  required
                />
              </label>
            </p>
            <p>
              <label>
                Email:{" "}
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
              </label>
            </p>
            <p>
              <label className="same-line">
                Number of People:{" "}
                <select
                  name="people"
                  value={this.state.people}
                  onChange={this.handleChange}
                  required
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </label>
            </p>
            <p>
              <label>
                Message:{" "}
                <textarea
                  id="message"
                  name="message"
                  placeholder="Can't wait to eat some cake!"
                  value={this.state.message}
                  onChange={this.handleChange}
                />
              </label>
            </p>
            <ButtonWrapper>
              <CustomLink to="/" inverted>Back</CustomLink>
              <Button type="submit">Send</Button>
            </ButtonWrapper>
          </form>
        </Card>
      </FormWrapper>
    )
  }
}
export default Form
