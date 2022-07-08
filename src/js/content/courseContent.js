import React, {useState, useEffect} from "react";
import MainCourseContent from "./mainCourseContent";
import NavBarContent from "./navBarContent";

const CourseContent=()=> {
      return(

          <div className="content">
              <MainCourseContent />
              <NavBarContent/>

          </div>

      )
}
export default CourseContent;