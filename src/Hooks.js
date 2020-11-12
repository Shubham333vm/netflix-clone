import React, { useEffect,useState } from 'react'
import Child from './Child'

 function Hooks() {

    const [keyId, incrementKeyValue] = React.useState(0);
  
    const handleKeyChange = () => incrementKeyValue(keyId + 1);
// Reacs setStae useState are just asynchronous actions.
// React this.setState, and React.useState create queues for 
// React core to update the state object of a React component.
  
    var [count, setcount] = useState(0);

    useEffect(()=>{
        // This hook lifeCycle method is a combo of -> 1)componentDidMount 2)componentDidUpdate
        console.log("Functional useEffect and value of count =>" + count)
        document.title="Count Val ="+count
       // setcount(count+=1)
    },[])
    //If you set dependencies as an empty array in useEffect then this method will be called only one time you can say it will 
    //behave like componentDidMount
    //If you update anything in useEffect then it will reder again but it will never call useEffect again
    //But if you are changing state in useEffect then it will render again and we end having infinite loop beacuse
    // then it will beahve as an componentDidUpdate


    return (
        <div>
            {console.log("Functional return call and value of count =>"+ count)}
            <h1>Functional component Hooks Concept</h1>
            {/* <Child count={count}/> */}
            <button onClick={()=>{setcount(count+=1)}
                }>Click me  {count}</button>
        {/* <button onClick={handleKeyChange}>Change C component key</button> */}

        </div>
    )
}

export default Hooks;
