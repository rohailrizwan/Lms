import React, { useState } from 'react'
import MYInput from '../../../Components/MyInput'
import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import {  addquiz } from '../../../Config/FirebaseMethod';
import { useParams } from 'react-router-dom';
export default function AddQuiz() {
    const [Allquiz,setAllquiz]=useState<any>([])
    const [Quizmodel, setQuizModel] = useState<any>({})
    const [Allquestion, SetAllQuestion] = useState<any>([])
    const [Question, SetQuestion] = useState<any>("")
    const [Correctopt, SetCorrectopt] = useState<any>("")
    const [Lock, SetLock] = useState<boolean>(false)
    const [option, setoption] = useState<any>([])
    const param =useParams()
    let fillModel = (key: string, value: any) => {
        Quizmodel[key] = value
        setQuizModel({ ...Quizmodel })
    }
    let Lockquiz = () => {
        SetLock(true)
    }
    let Addques = () => {
        let newquestion = {
            question: Question,
            Correctoption: Correctopt,
            options: [...option]
        }
        Allquestion.push(newquestion)
        SetQuestion('')
        SetCorrectopt('')
        setoption([])
    }
    let SaveQuiz = () => {
        const newquiz={...Quizmodel,  Allques: Allquestion}
        setQuizModel(newquiz)
        Allquiz.push(newquiz)
        addquiz(Allquiz,`${param.id} Institute`).then((res)=>{
            alert(res)
        }).catch((err)=>{
            alert(err)
        })
        SetLock(false)
    }
   
    let Addoption = () => {
        if (option.length < 4) {
            setoption([...option, '']);
        }
    };

    let updatedoption = (opt: any, index: number) => {
        const newoption = [...option];
        newoption[index] = opt;
        setoption(newoption);
    };

    return (
        <div>
            <div className="metainput container my-5">
                <div className='d-flex justify-content-between mt-3 mb-0'>
                    <h4 style={{ color: "blueviolet" }} className='mb-3'>Add Quiz</h4>
                    <button style={{ backgroundColor: "blueviolet", width: "150px", height: "50px", color: "white" }} disabled={Allquestion.length === 0} onClick={SaveQuiz} id='save' className='btn'>Save Quiz</button>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <Box className="p-3">
                            <TextField variant="outlined" type="text" disabled={Lock} label="Quiz Name" style={{ color: "gray" }} onChange={(e: any) => fillModel("quizName", e.target.value)} />
                        </Box>
                    </div>
                    <div className="col-md-6 mb-4">
                        <Box className="p-3">
                            <TextField variant="outlined" type="text" disabled={Lock} label="Quiz Key" style={{ color: "gray" }} onChange={(e: any) => fillModel("quizkey", e.target.value)} />
                        </Box>
                    </div>
                    <div className="col-md-6 mb-4">
                        <Box className="p-3">
                            <TextField variant="outlined" type="text" disabled={Lock} label="Quiz min" style={{ color: "gray" }} onChange={(e: any) => fillModel("quizmin", e.target.value)} />
                        </Box>
                    </div>
                    <div className="col-md-6 mb-4">
                        <Box className="p-3">
                            <TextField variant="outlined" type="text" disabled={Lock} label="Quiz Description" style={{ color: "gray" }} onChange={(e: any) => fillModel("quizdescription", e.target.value)} />
                        </Box>
                    </div>
                    <div className="lockquiz mb-4">
                        <button style={{ backgroundColor: "blueviolet", width: "150px", height: "50px", color: "white" }} disabled={Lock} onClick={Lockquiz} className='btn'>Lock Quiz</button>
                    </div>
                    <div className="col-md-8 mb-4">
                        <Box className="p-3">
                            <TextField variant="outlined" className='w-100' type="text" value={Question} label="Question" style={{ color: "gray" }} onChange={(e: any) => SetQuestion(e.target.value)} />
                        </Box>
                    </div>
                    <div className="col-md-4 mb-0 mt-3">
                        <button style={{ backgroundColor: "blueviolet", width: "150px", height: "50px", color: "white" }} disabled={option.length < 2} onClick={() => Addques()} className='btn'>Add Question</button>
                    </div>
                    <div className="col-md-8 mb-4">
                        <Box className="p-3">
                            <TextField variant="outlined" className='w-100' type="text" value={Correctopt} label="Correct option" style={{ color: "gray" }} onChange={(e: any) => SetCorrectopt(e.target.value)} />
                        </Box>
                    </div>
                    <div className="col-md-8 mb-4">
                        {option.map((opt: any, index: any) => (
                            <TextField type="text"
                                placeholder="Enter option"
                                className="rounded-2 w-100 mb-2 myoption"
                                value={opt}
                                onChange={(e) => updatedoption(e.target.value, index)}
                                key={index}></TextField>
                        ))}
                    </div>
                    <div className="col-md-4">
                        {
                            option.length < 4 ? <button className='btn' style={{ backgroundColor: "blueviolet", width: "150px", height: "50px", color: "white" }} onClick={Addoption}>Add option</button> : ('')
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
