import React from "react"
class Counter extends React.Component{
    constructor(){
        super();
        this.state={
            count:0
        }

    }
    //In class only define increment fuction and decrement fuction
    //how to change the state data through set state function you can update your data
    //bcz if we kept some value inside the state how can modify the data through the set state data.so inside the react set state function then only your recat will update
    increment(){
        this.state.count = this.state.count+1;
        // this.setState({count:this.state.count+1})
        console.log(this.state.count)
    }

    decrement(){
        this.state.count = this.state.count-1;
        console.log(this.state.count)
        //this.setState({count:this.state.count-1})
    }
    render(){
        console.log("rendering")
        return(
            <div>
                <h1>Counter Example</h1>
                <h1>Count: {this.state.count}</h1>
                <button onClick={() =>this.increment()} className="btn btn-primary">Increment</button>
                <button  onClick={() =>this.decrement()} className="btn btn-danger">Decrement</button>
            </div>
        )
    }
}
export default Counter