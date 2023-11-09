import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CourseList from './CourseList'
import AddCourse from './AddCourse'

export default function CourseRegister() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<CourseList/>}></Route>
                <Route path='AddCourse' element={<AddCourse/>}></Route>
            </Routes>
        </div>
    )
}
