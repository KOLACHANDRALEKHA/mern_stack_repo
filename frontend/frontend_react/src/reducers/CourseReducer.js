const intialState ={
    courses:[
    ]
}

const CourseReducer = (state=intialState,action)=>{

    if(action.type=='ADD_COURSE'){
        return{
            ...state,
            courses:[
                ...state.courses,
                action.payload
            ]
        }
    }else{
        return state
    }
}

export default  CourseReducer
