import React, { Component } from "react"
import logo from "../images/gatsby-icon.png"
import "./layout.css"

const Temp = (props) => {
    return (<div>{props.test}</div>)
}

class About extends Component {
    state = {
        val: 1
    }

    render() {
        return (
            <div className="About">
            <Temp val={this.state.val}/>
            </div>
        )
    }
}
export default About