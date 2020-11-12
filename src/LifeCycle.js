import React, { Component } from 'react'
import axios from './axios'
import UnmountThisCom from './UnmountThisCom'
import request from './request';

export default class LifeCycle extends Component {

    constructor({fetchUrls}){
        super()
        console.log("First component will initialize with the help of constructor")
        this.state={
            show:false
        }
       
    }

    componentWillMount(){
        console.log("Third componentWillMount method will call")

    }

    //This method will call only once in a components lifetime.
    //But their are few cases where people find this method triggered multiple times
    // 1.Avoid conditional rendering
    //If you perform any type of IF conditional rendering, it will more than likely force
    //your child component to unmount and re-mount.
    //Thus triggering multiple componentDidMount lifecycle calls.

    // 2.Avoid adding key as a prop
    //Adding a key prop to your React component may trigger componentDidMount to be called multiple times.
    //The key property in React is a special property that helps identify HTML elements or a React component in React.
    //These values have to be very unique to the element or component. Whenever React notices that value has been changed,
    // it will trigger componentWillUnmount the element or component, and re-run componentDidMount.
    
    componentDidMount(){
        console.log("When dom is ready componentDidMount method is called and here we call for apis to fetch data")
       
    }

    componentDidUpdate(previousProp,previousState,snapShot){
        console.log("Beacuse state of a component was changed thats why componentDidUpdate called and it holds previous values")
        // Always use conditions before setting state in this method because u will end with error
        console.log("Previous State Value==="+previousState.show)
    }

   getDrivedStateFromProps(props,state){
      console.log("GetDrivedStateFromProps") 
   }

    render() {

        console.log("Second component will render inside the dom")
        return (
            <div>
                <h1>We are learning life cycle methods</h1>
                {
                   // this.state.show?<UnmountThisCom/>:null
                }

                <button onClick={()=>{
                    this.setState({show:!this.state.show})
                }}>Toggel Nav Bar</button>
            </div>
        )
    }
}
