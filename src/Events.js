import React from 'react'

function handleHover() {
    console.log("I was hovered")
}

function Events() {
    return (
        <div>
            <img src="https://www.imohcodes.com/images/img/header2.jpg" alt=""/>
            <h2>Hello There</h2>

            <br />
            <br />
            <button onMouseOver={handleHover}>Click Me</button> 
        </div>
    )
}


export default Events