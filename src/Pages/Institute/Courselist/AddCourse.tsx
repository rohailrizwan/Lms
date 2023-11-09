import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import { useState } from "react"
import { useNavigate, useParams } from 'react-router-dom';
import { FbCourse, FbForm } from '../../../Config/FirebaseMethod';


export default function AddCourse() {
    const [course, setCourse] = useState<any>({});
    const param=useParams()
    // console.log(param.id)
    const fillModel = (key: string, value: any) => {
        course[key]=value
        setCourse({...course})
    }

    let Add = () => {
        if (
            !course.CourseName ||
            !course.CourseTeacher ||
            !course.CourseFee ||
            !course.CourseDuration
        ) {
            alert("Please fill out all fields.");
        } else {
            FbCourse(course,`${param.id} Institute`)
                .then((res) => {
                    alert(res);
                })
                .catch((err) => {
                    alert(err);
                });
        }
    }

    return (
        <Box className="container">
            <h1 style={{ color: "blueviolet" }} className='mb-5'>Course Registration</h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <Box>
                    <Box className='mb-4'>
                        <Typography className='mb-2'>Course Name</Typography>
                        <TextField
                            id="outlined-basic"
                            label="Course Name"
                            variant="outlined"
                            onChange={(e) => fillModel("CourseName", e.target.value)}
                        />
                    </Box>
                    <Box className='mb-4'>
                        <Typography className='mb-2'>Course Duration</Typography>
                        <TextField
                            id="outlined-basic"
                            label="Course Duration"
                            variant="outlined"
                            onChange={(e) => fillModel("CourseDuration", e.target.value)}
                        />
                    </Box>
                    <Box className='mb-4'>
                        <Typography className='mb-2'>Course Fee</Typography>
                        <TextField
                            id="outlined-basic"
                            label="Course Fee"
                            variant="outlined"
                            onChange={(e) => fillModel("CourseFee", e.target.value)}
                        />
                    </Box>
                    <Box className='mb-4'>
                        <Typography className='mb-2'>Course Teacher</Typography>
                        <TextField
                            id="outlined-basic"
                            label="Course Teacher"
                            variant="outlined"
                            onChange={(e) => fillModel("CourseTeacher", e.target.value)}
                        />
                    </Box>
                    <Box className='mb-4'>
                        <Button variant="contained" color="primary" onClick={Add}>
                            Add Course
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
