import { useState, useEffect} from "react"
function StudentList(){
    const [students,setStudents] = useState([])
    useEffect(()=>{
        let students = localStorage.getItem("students")
        if(students){
            let studentData = JSON.parse(students)
            // const{name,age} = studentData
            setStudents(studentData)
            console.log(studentData)
        }

    },[])
    return(
        <div className="container">
            <h1>
                I am in student list page
            </h1>
            <div>
                {students.length}
                {/* <h1>Name: {student.name}  Age: {student.age} </h1> */}
                {/* <ul>
                    {student.length}
                {student.map((student,index)=>{
                    return(
                        <div>{student.name}</div>
                    )
                })}
                    
                </ul> */}
                {students.map((item)=>{
                    return(
                        <div>
                        <h1>{item.name}</h1>
                        <h1>{item.age}</h1>
                        </div>
                    )

                })}
            </div>
        </div>

    )
}

export default StudentList