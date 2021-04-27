import { Component } from "react";
import React from 'react';

// your Bomb code here!
export default class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
        return (
            <div>
                {this.state.secondsLeft > 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : 'Boom!'}
            </div>
        )
    }
}