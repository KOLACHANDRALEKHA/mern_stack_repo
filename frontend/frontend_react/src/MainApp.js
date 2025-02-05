import { BrowserRouter, Routes, Route } from "react-router-dom";

import EmployeePage from "./Pages/EmployeePage";
import StudentPage from "./Pages/StudentPage";
import CoursePage from "./Pages/CoursePage";
import Header from "./Pages/Header";
import StudentList from "./Pages/StudentList";
import CourseList from "./Pages/CourseListPage";
import ClassBasedComponent from "./react-recap/ClassBasedComponent";
import FunctionBasedComponent from "./react-recap/FunctionBasedComponent";
import StateHook from "./react-recap/recap-hooks/StateHook";
import EffectHookDemo from "./react-recap/recap-hooks/EffectHook";
import UseReducerRecap from "./hooks/UseReducerRecap";



function MainApp() {

  return (
    <div className="App">
      {/* <ClassBasedComponent/>
      <FunctionBasedComponent/> */}
      {/* <StateHook/>
      <EffectHookDemo/> */}
      {/* //this is the parent component for all  bcz whatever we place inside this will navigate. so browser router will act as parent for all the components which is the part of routes*/}
      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/course" element={<CoursePage />}></Route>
          <Route path="/student" element={<StudentPage />}></Route>
          <Route path="/" element={<EmployeePage />}></Route>
          <Route path="/employee" element={<EmployeePage />}></Route>
          <Route path="/studentlist" element={<StudentList />}></Route>
          <Route path="/courseList" element={<CourseList/>}></Route>
        </Routes>
      </BrowserRouter> */}
      <UseReducerRecap/>

    </div>
  );
}

export default MainApp;