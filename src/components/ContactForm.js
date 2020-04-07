
import React from 'react'
import $ from 'jquery'

import './ContactForm.css'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", email: "", message: "" };
        }

    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => {
                $('#success').each(function() {
                    $(this).addClass('expand');
                });
            })
            .catch(error => alert(error));

        e.preventDefault();
        };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, email, message } = this.state;
        return (
            <form
                className="contact-form"
                name="contact"
                method="post"
                action="#"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
            >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact" />
  
                    <input placeholder="Name" type="text" name="name" value={name} onChange={this.handleChange} required></input>
                    <input placeholder="Enter email" type="email" name="email" value={email} onChange={this.handleChange} required></input>
                    <textarea placeholder="Your Message" type="text" name="message" value={message} onChange={this.handleChange} required></textarea>
                    <div id="success">
                        <div className="success-message">
                            Your message was sent successfully. Thanks!
                        </div>
                    </div>
                    <input className="button submit-form is-pulled-right" type="submit" id="submit" value="SUBMIT"></input>
            </form>
        )
    }
}


