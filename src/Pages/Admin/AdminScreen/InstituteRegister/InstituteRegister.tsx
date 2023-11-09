import React from 'react'
import { Route, Routes } from 'react-router-dom'
import InstituteCourse from './InstituteCourse'
import InstituteDetail from './InstituteDetail'
import InstituteList from './InstituteList'

export default function InstituteRegister() {
  return (
    <div>
      <Routes>
            <Route path='/*' element={<InstituteList/>}></Route>
            <Route path='InstituteCourse' element={<InstituteCourse/>}></Route>
            <Route path='InstituteDetail/:id' element={<InstituteDetail/>}></Route>
      </Routes>
    </div>
  )
}
