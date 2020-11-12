import React, { Component } from 'react'
  
import React from 'react'

export default function cmpDidMount() {
    const [keyId, incrementKeyValue] = React.useState(0);
  
    const handleKeyChange = () => incrementKeyValue(keyId + 1);
    return (
        <div>
            <h1>IN react</h1>
             <button onClick={handleKeyChange}>Change C component key</button>

        </div>
    )
}

// By default, a React component will only call componentDidMount once.
// The only way it will get run again is if you delete the component or change the key prop value.
  class ComponentC extends React.Component {
    componentDidMount() {
      console.log("component C mounted");
    }
  
    render() {
      return <div>Component C</div>;
    }
  }

 