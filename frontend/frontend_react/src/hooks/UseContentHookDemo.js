import {createContext,useContext} from "react"

const NameContext = createContext();

const name="hyd";

function Home(){
    const name = useContext(NameContext)
    return(
        <div>
            <h4>Home component {name}</h4>
            <AboutUs/> 
        </div>
    )
}

function AboutUs(){
    const name = useContext(NameContext)
    return(
        <div>About us component {name}
            <ContactUs/> 
        </div>
    ) 
}


function ContactUs(){
    const name = useContext(NameContext)
    return(
        <div>ContactUs us component My addres: {name}</div>
    ) 
}

function MenuItem(){
    return(
        <Home/>
    )
}

function ContextHookDemo(props){
    return(
        <NameContext.Provider value={name}>
           <h1>Trainer name:{props.trainer}</h1> 
            <MenuItem/>
        </NameContext.Provider>
    )
}

export default ContextHookDemo