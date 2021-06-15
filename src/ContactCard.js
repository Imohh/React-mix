import React from 'react'

function ContactCard(props) {
    return (
      <div className="contact-card">
        <h3>Question: {props.question}</h3>
        <h3>Answer: </h3>
      </div>
    )
}

export default ContactCard