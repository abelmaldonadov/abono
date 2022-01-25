import React from 'react'
import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeting";
import button from "bootstrap/js/src/button";


export default class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        this.setState(prevState => ({
            isLoggedIn: !prevState.isLoggedIn
        }))
    }
    render() {
        const {isLoggedIn} = this.state
        const message = (isLoggedIn) ? <UserGreeting/> : <GuestGreeting/>
        const btnMessage = (isLoggedIn) ? "Salir" : "Ingresar"
        return <>
            {message}
            <button onClick={this.handleClick}>{btnMessage}</button>
        </>
    }
}