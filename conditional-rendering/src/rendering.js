import React from 'react'

class Rendering extends React.Component{
    render(){
        var num = 100;
        var arr=[];

       
        return(
            <div className="arr">
               
                {num =(num>=arr)? "that is 100":"that is not 100"}
                
            </div>

        )
    }
}

export default Rendering