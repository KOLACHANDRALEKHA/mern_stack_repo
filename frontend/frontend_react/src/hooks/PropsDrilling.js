function Home(props){
    return(
        <div>
            <h4>Home component</h4>
            <Aboutus address={props.address}/>
        </div>
    )
}

function Aboutus(props){
    return(
        <div>Aboutus Component
            <ContactUs address={props.address}/>
        </div>
    )
}

function ContactUs(props){
    return(
        <div>ContactUs Component My addresss: {props.address}</div>
    )
}

function MenuItem(props){
    return(
        <Home address="hyd"/>
    )

}

export default MenuItem