import {useState,useReducer} from "react"
function UseReducerRecap(){

    const initialState = {
        name:""
    }
    
    function employeeReducer(state=initialState,action){
        if(action.type==="add_employee"){
            return {name:action.data.name}
        }else if(action.type==='show_employee'){
            return {name:state.name,id:101,age:20}
        }
        else {
            return state;
        }
    }

    const [state,dispatch] = useReducer(employeeReducer,initialState);

const handleChange = (e)=>{
    dispatch({type:"add_employee",data:{name:e.target.value}})
}
const show = (e)=>{
    e.preventDefault()
    dispatch({type:"show_employee"})
}
    return(
        <div>
            <h1>Use Reducer Demo </h1>
            <form>
                <label>
                    Name
                </label>
                <input type="text" value={state.name} onChange={(e)=>handleChange(e)} />
                <h1>Name of employee: {state.name}</h1>
                <button onClick={(e)=>show(e)}>show employee</button>
                <h1>Name:{state.name} age:{state.age} id{state.id}</h1>
            </form>
        </div>
    )
}



export default UseReducerRecap



//Payload: payload is any name you can pass here.
//State: In side state we have name , property



//useReducer steps
//1.import {useReducer} from "react"
//2.create initialState 
//3.create Reducer Function ( reducer function should effect outside of the data)
//4.pass action , payload(any data)
//5.Const [state,dispatch] = useReduce(

// Const [name,setName] = useState