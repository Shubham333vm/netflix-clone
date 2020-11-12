import React, { Component } from 'react'

export default class UnmountThisCom extends Component {

    constructor(){
        super();
        console.log("UnMount constructor")
    }

    componentDidMount(){
        console.log("Unmount Component's componentDidMount method")
    }
    componentWillUnmount(){
        console.log("UnMount component's componentWillUnmount method ")
    }

    componentDidUpdate(){
        console.log("UnMount component's componentDidUpdate method ")

    }

    com

    render() {
        console.log("UnMount render")
        return (
            <div>
                <h1>UnMount Component</h1>
            </div>
        )
    }
}
