import React, { useEffect } from 'react'

export default function Child(props) {

    useEffect(()=>{
        console.log("ChildComponent useEffect Methd")
    },[])
    return (
        <div>
            {console.log("Child return call")}
            <h1>
                Child Component
            </h1>

    <h2>{props.count}</h2>
        </div>
    )
}
