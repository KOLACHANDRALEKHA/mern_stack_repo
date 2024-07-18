import React from "react";
import ChildData from "./ChildData";

class ParentData extends React.Component{
    constructor(){
        super()
        this.state={
            name:"sameer"
        }
    }
    recievedData(data){
        console.log("value received from child=",data)
        this.setState({name:data})
    }

    render(){
        return(
            <div>
                <h1>hello in parent my name is {this.state.name}</h1>
                <ChildData recieveData={(data)=>this.recievedData(data)}/>
            </div>
        )
    }
   
}

export default ParentData

//in javascript they will ask 6 to questions they will ask 3 or 4 qustns in react focus should be be strong on javascript