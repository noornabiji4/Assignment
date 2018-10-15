import React from 'react'

class Rendering extends React.Component{
    render(){
        var num = 100;
        var arr=[];

       
        return(
            <div>
                {/* <ol>                {num.map((li)=>{
                    return <li>{li}</li>
                })}
                {/* </ol> */}
                {num =(num>=arr)? num.push(arr):"not 100"}

                
            </div>

        )
    }
}

export default Rendering