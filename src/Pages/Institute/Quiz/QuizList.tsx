import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Cards from '../../../Components/Card'
import { FbgetList } from '../../../Config/FirebaseMethod'

export default function QuizList() {
  const navigate = useNavigate()
  const param=useParams()
  const [Myquiz,SetMyquiz]=useState<any>([])
  useEffect(() => {
    FbgetList(`quiz/${param.id} Institute`).then((res)=>{
      // console.log(res)
      SetMyquiz(res)
    })
    .catch((err:any)=>{
      alert(err)
    })
  }, [])
  return (
    <div>
      <div className="container">
        <div className='d-flex justify-content-between mb-5 mt-3 '>
          <h1 style={{ color: "blueviolet" }}>Quiz</h1>
          <button style={{ backgroundColor: "blueviolet", width: "150px", height: "50px", color: "white" }} className='btn' onClick={() => navigate(`AddQuiz`)}>Add Quiz</button>
        </div>
    <div className="row">
    {
          Myquiz.map((obj:any,i:any)=>{
            return(
              <div className="col-md-5 col-lg-4 col-sm-12 mb-4" key={i}>
                  <Cards subject={`${obj.quizName} Quiz`} description={obj.quizdescription}/>
              </div>
            )
          })
        }
     
    </div>
      </div>

    </div>
  )
}
