import React from 'react'

// function handleHover() {
//     console.log("I was hovered")
// }


class Events extends React.Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {
        return (
            <div>
                <img src="https://www.imohcodes.com/images/img/header2.jpg" alt=""/>
                <h2>{this.state.count}</h2>
                
                <br/>
                <br/>
                <button onClick={this.handleClick}>Click Me</button> 
                
            </div>
        )
    }
}


export default Events