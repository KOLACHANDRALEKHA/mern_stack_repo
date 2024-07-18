import React from "react";
class Employee extends React.Component{

    constructor(props){
        console.log(props);
        super(props)
        this.state = {
            name:"lekha",
            age:"22",
            salary:"40000",
            companyName:props.company,
            changeName:""
        }
        this.changeName = this.changeName.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    changeName(){
        console.log(this.state.name);
        this.setState({name:this.state.changeName})
        this.setState({changeName:""})
        this.props.add();

    }
    handleChange(event){
        this.setState({changeName:event.target.value})
        this.props.add();
    }
    render(){
        return(
            <div>
                <h1>Name of employee:{this.state.name}</h1>
                <h1>Age:{this.state.age}</h1>
                <h1>salary:{this.state.salary}</h1>
                <h1>CompanyName={this.props.company}</h1>
                <input type="text" value={this.state.changeName} onChange={this.handleChange}/>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        )
    }
}

export default Employee