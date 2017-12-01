//Stateless

import React from 'react'
const Test = (props) =>{
    return (
        <div></div>
    )
}
export default Test;


//Stateful
import React, { Component } from 'react';
class Test extends Component{
    constructor(props){
        super(props);
    }
    render (){
        return (
            <div></div>
        )
    }
}
export default Test;