import React from "react";
import Child from "./Child";
//Mounting means Just putting the element into your web page.and then creation of elements to put into goes under 4 things 
//1.constructor 2.getDrivedStateFromProps 3.render then last 4.componentDidMount
class Parent extends React.Component{
    constructor(){
        console.log("i am in parent constructor")
        super()
        this.state={
            count:0,
            show:true
        }
    }


    static getDerivedStateFromProps(props,state){
        console.log("i m in parent getDerivedStateFromProps")
        return {}
    }
    componentDidMount(){
        console.log("i m in parent componentDidMount")
    }
    increment(){
        this.setState({count:this.state.count+1})
    }

    hide(){
        this.setState({show:!this.state.show})
    }

    render(){
        console.log("i m parent render")
        return(
            <div>
                <h1>I am in parent count {this.state.count}</h1>
                <button onClick={()=>this.increment()} className="btn btn-success">Increment</button>
                <button onClick={()=>this.hide()}>Hide Child</button>
                {this.state.show&&<Child count={this.state.count}/>}
            </div>
        )
    }
}
export default Parent

//whenever you click on button increment.your data will be update you know whenever you change the state react will re-render everything.first time mounting is fine it's render the child .but when I change the state increment value and I am passing the data to this props it has been change again call the re-render.again re-render the child component