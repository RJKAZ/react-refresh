import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar bg-primary">
                <h1>Navbar  <i className="fab fa-github"></i> {this.props.title}</h1>
            </nav>
        )
    }
}

export default Navbar
