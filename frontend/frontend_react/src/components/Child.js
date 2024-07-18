import React from "react";

class Child extends React.Component{
    //This child will receive data as props
    constructor(props){
        console.log("i am in child constructor")
        super(props)
        this.state={}
    }

    static getDerivedStateFromProps(props){
        console.log(props)
        console.log("i am in child getDerivedStateFromProps")
        return{}
    }
    shouldComponentUpdate(){
        console.log("i am in child shouldComponentUpdate")
        return true;
    }
    componentDidMount(){
        console.log("i am in child componentdidamount")
    }

    getSnapshotBeforeUpdate(props,state){
        console.log("i am in child getSnapshotBeforeUpdate")
        console.log(props,state)
        return props
    }

    componentDidUpdate(props){
        console.log("i am in child componentDidUpdate")
        console.log("",this.props.count)
    }
    componentWillUnmount(){
        alert("your form is unsaved please complete it")
        console.log("i am unmounting")
    }
    render(){
        console.log("i am in child render")
        return(
            <div>
                <h1>I am in child count {this.props.count}</h1>
            </div>
        )
    }
}
export default Child


//2.Update : Whenever you change the state dataor update the data or your component.means simply whenever you the state or props.
//How props I can change?---If I pass something to the component .If I change the parent data.props will change automatically.
//Update:changing states or props
//1.getDerivedStateFromProps 2.shouldComponentUpdate 3.render 4.getSnapShotBeforeUpdate 5.componentDidUpdate
//count 1 is responsible for parent component 
// count 2 is responsible for child component
//in child shouldComponentUpdate return if we put false your render method will not called for child.If we click webpage increment butn.this time two methods for child.In update phase we should get 5 methods
//How you are passing data from parent to child?
//answer: through props you are passing the data and receiving it through child component..through states for local component