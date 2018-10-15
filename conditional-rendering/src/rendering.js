import React, { Component } from 'react';

class Rendering extends Component{
    render(){
        var num = prompt("enter a number");
 

       
        return(
            <div className="arr">
               
                {(num>0)? "Positive":"Negative"}
                
            </div>

        )
    }
}

export default Rendering