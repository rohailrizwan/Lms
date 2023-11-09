import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StudentList from './StudentList'
import AddStudent from './Addstudent'
import StudentDetails from './StudentDetails'

export default function Student() {
  return (
    <div>
      <Routes>
            <Route path='/' element={<StudentList/>}></Route>
            <Route path='AddStudent' element={<AddStudent/>}></Route>
            <Route path="StudentDetails/:institute/:id" element={<StudentDetails />} />
      </Routes>
    </div>
  )
}
