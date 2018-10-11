import React, { Component } from 'react';
class Nav extends Component{

constructor(props){
    super();
    this.state = {
        selectebNavBar : "Home"
    }

}    
updateNavBar=(list)=>{
    this.setState(()=>{
        return{
            selectebNavBar : list
        }
    })
}

render(){
    var NavBar=["Home" , "ES6" , "About"]

    return(
    <div>
    <ul className= "navelement">
    {NavBar.map((list)=>{
        return <li style= {list===this.state.selectebNavBar ? {color : 'yellow'}:null} 
        key={list}
            onClick = {()=>this.updateNavBar(list)}>
          
        {list}</li>

    })}
    
    </ul>

    
    </div>

    )
}
    
}
export default Nav


