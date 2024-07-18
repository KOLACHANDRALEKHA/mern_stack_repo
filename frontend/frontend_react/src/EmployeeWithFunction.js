import { useState } from "react";

function EmployeeWithFunction(props){
const [address,setAddress]= useState("hyd")

    return(
        <div>
            <h1>Hello from employee functional component {props.company} {address}</h1>
        </div>
    )
}

export default EmployeeWithFunction