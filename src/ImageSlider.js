import { Component } from "react";
import React from 'react';

// your ImageSlider code here!
export default class ImageSlider extends Component{
    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }

    render() {
        return (
            <div>
                I am on slide {this.state.currentSlideIndex}
            </div>
        )
    }
}