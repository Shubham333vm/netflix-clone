import React, { Component } from 'react'

export default class ComponentC extends Component {
    componentDidMount() {
        console.log("component C mounted");
      }
    
      render() {
        return <div>Component C</div>;
      }
}
