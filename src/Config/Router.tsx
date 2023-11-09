import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Admin from '../Pages/Admin/Index'
import Institutedashboard from '../Pages/Institute'
import Home from '../Pages/Home'
import StudentDashboard from '../Pages/Students dashboard'
import Protected from '../Pages/Admin/Protected'
import ProtectedInstitute from '../Pages/Institute/ProtectedInstitute'
import ProtectedDonor from '../Pages/Institute/ProtectedInstitute'



export default function Router() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
                <Route path='/*' element={<Home/>}></Route>
                <Route path="/Login/:id" element={<Login/>}/>
                <Route path="Admin/*" element={<Protected Screen={Admin} />}/>
                <Route path="Institute/:id/*" element={<ProtectedDonor Screen={Institutedashboard}/>}/>
                <Route path="StudentDashboard/:id/*" element={<ProtectedDonor Screen={StudentDashboard}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
