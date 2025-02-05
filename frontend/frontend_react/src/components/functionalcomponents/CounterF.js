import {useState} from "react"
function CounterF(props){
    const [count,setCount] = useState(0);
    const [name,setName] = useState("");
    

    function decrement(){
        setCount(count-1)
    }

    function increment(){
        setCount(count+1)
    }

    function handleChange(e){
        setName(e.target.value);
    }
    return(
        <div>
            <button className="btn btn-primary" onClick={()=>increment()}>Increment</button>
            <button className="btn btn-danger" onClick={()=>decrement()}>Decrement</button>
            <div><h1>count: {count}</h1></div>
            <h2>my name is {name}</h2>
            <input type="text" value={name} onChange={handleChange}/>
        </div>
    )
}
export default CounterF

// let array = [2,4]
// let [a,b] = array
//How to maintain the state?
//To use the state react has given hooks
