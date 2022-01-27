import React from 'react'
import {Button} from "react-bootstrap";

export default class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {}
    render() {
        const {numItems, minusItem, plusItem} = this.props
        return <div style={{display:'flex', justifyContent:'start'}}>
            <Button
                variant="outline-success"
                style={{borderRadius:'5px 0 0 5px'}}
                onClick={minusItem}
            >
                -
            </Button>
            <input
                className="form-control"
                style={{width:'60px', borderRadius: '0 0 0 0', textAlign:'center'}}
                value={numItems}
                onChange={this.handleChange}
            />
            <Button
                variant="outline-success"
                style={{borderRadius:'0 5px 5px 0'}}
                onClick={plusItem}
            >
                +
            </Button>
        </div>
    }
}