import React from "react";

class Company extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // companyName:"",
            companyAddress:"hyd",
        }

    }


    
    render(){
        return(
            <div>
                <h1>hello from class based component My company  name is{this.props.company} {this.state.companyAddress}</h1>
            </div>
        )
    }
}
export default Company