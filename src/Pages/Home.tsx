import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate=useNavigate()
    document.body.style.backgroundColor="white"
    let users="users"
    let student="Students"
  return (
    <div >
        <div className="container">
            <div className='homebtn'>
                <div className="Admin">
                    <button onClick={()=>navigate(`Login/${users}`)}>Login as a Admin</button>
                </div>
                <div className="student">
                <button onClick={()=>navigate(`Login/${student}`)}>Login as a Student</button>
                    </div>
                </div>
            </div>
        </div>
  )
}
