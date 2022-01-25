import React from "react";

export default class Timer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }
    componentWillUnmount() {
        clearInterval(this.timerID)
    }
    tick() {
        this.setState({
            date: new Date()
        })
    }
    render() {
        // const {date} = this.props
        return <div>
            <h1>Timer</h1>
            <h2>It is { this.state.date.toLocaleTimeString() }.</h2>
        </div>
    }
}