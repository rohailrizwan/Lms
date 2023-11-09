import React from 'react'
import { Route, Routes } from 'react-router-dom'
import QuizList from './QuizList'
import AddQuiz from './AddQuiz'

export default function Quiz() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<QuizList/>}/>
            <Route path='AddQuiz' element={<AddQuiz/>}/>
        </Routes>
    </div>
  )
}
