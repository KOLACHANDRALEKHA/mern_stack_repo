import MenuItem from "./PropsDrilling";
import UseEffectHookDemo from "./UseEffect";
import UseState from "./UseState"
import ContentHookDemo from "./UseContentHookDemo";
import UseReducerHookDemo from "./UseReducerDemo";
import UseRefDemo from "./UseRefDemo";

function AllHook(props){
    return(
        <div>
            <h1>Demo of React hooks</h1>
            {/* <UseState/>
            {/* //usestate is used to maintain the local data in functional component */}
            {/* <UseEffectHookDemo/>  */}
            {/* <MenuItem/> */}
            {/*//called the menuitem component */}
            {/* <ContentHookDemo trainer={props.trainer}/> */}
            {/* <UseReducerHookDemo/> */}
            <UseRefDemo/>
        </div>
    )
    
}

export default AllHook