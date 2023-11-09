import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import { useState } from "react"
import { useNavigate, useParams } from 'react-router-dom';
import { FbCourse, FbForm, FbgetList, fbSignUp } from '../../../Config/FirebaseMethod';


export default function AddStudent() {
    const myqualification = ["Matric", "Intermediate", "Graduate", "Master"]
    const mySection = ["Section A", "Section B", "Section C", "Section D"]
    const [selectedGender, SetselectedGender] = React.useState('')
    const [studentRegister, SetStudentRegister] = React.useState<any>({})
    const city=['Karachi', 'Lahore', 'Islamabad']
    const param = useParams()
    // console.log(param.id)

    const fillModel = (key: string, value: any) => {
        studentRegister[key] = value
        SetStudentRegister({ ...studentRegister,country:"pakistan" })
    }

    let Add = () => {
        console.log(studentRegister)
            fbSignUp(studentRegister, `Students/${param.id} Institute`)
                .then((res) => {
                    alert(res);
                })
                .catch((err) => {
                    alert(err);
                });
        
    }
    let handlechange = (e: any) => {
        SetselectedGender(e.target.value);
        fillModel('Gender', e.target.value);
    }
    const [CourseList, SetCourseList] = useState<any>([]);

    React.useEffect(() => {
        FbgetList(`Course/${param.id} Institute`).then((res) => {
            SetCourseList(res);
            // console.log(CourseList)
        });
    }, []);
    return (
        <Box className="container">
            <h1 style={{ color: "blueviolet" }} className='mb-5'>Course Registration</h1>
            <Box component="form" noValidate autoComplete="off">
                <Box className="row">
                    <Box className='mb-4 col-md-5 col-sm-6 mb-5'>
                        <Typography className='mb-2'>Student Name</Typography>
                        <TextField
                            id="outlined-basic"
                            label="Student Name"
                            variant="outlined"
                            // value={studentRegister.StudentName}
                            onChange={(e) => fillModel("name", e.target.value)}
                        />
                    </Box>
                    <Box className='mb-4 col-md-5 col-sm-6 mb-5'>
                        <Typography className='mb-2'>Father Name</Typography>
                        <TextField
                            id="outlined-basic"
                            label="Father Name"
                            variant="outlined"
                            value={studentRegister.FatherName}
                            onChange={(e) => fillModel("FatherName", e.target.value)}
                        />
                    </Box>
                    <Box className='mb-4 col-md-5 col-sm-6 mb-5'>
                        <Typography className='mb-2'>Student Cnic</Typography>
                        <TextField
                            id="outlined-basic"
                            label="Student Cnic"
                            variant="outlined"
                            value={studentRegister.StudentCnic}
                            onChange={(e) => fillModel("StudentCnic", e.target.value)}
                        />
                    </Box>
                    <Box className='mb-4 col-md-5 col-sm-6 mb-5'>
                        <Typography className='mb-2'>Student Contact</Typography>
                        <TextField
                            id="outlined-basic"
                            label="Student Contact"
                            variant="outlined"
                            value={studentRegister.StudentContact}
                            onChange={(e) => fillModel("StudentContact", e.target.value)}
                        />
                    </Box>
                    <Box className='mb-4 col-md-5 col-sm-6 mb-5'>
                        <Typography className='mb-2'>Student Address</Typography>
                        <TextField
                            id="outlined-basic"
                            label="Student Address"
                            variant="outlined"
                            value={studentRegister.StudentAddresss}
                            onChange={(e) => fillModel("StudentAddresss", e.target.value)}
                        />
                    </Box>
                    <Box className='mb-4 col-md-5 col-sm-6 mb-5'>
                        <Typography className='mb-2'>Student Email</Typography>
                        <TextField
                            id="outlined-basic"
                            label="Student Email"
                            variant="outlined"
                            value={studentRegister.StudentEmail}
                            onChange={(e) => fillModel("email", e.target.value)}
                        />
                    </Box>
                    <Box className='mb-4 col-md-5 col-sm-6 mb-5'>
                        <Typography className='mb-2'>Student Password</Typography>
                        <TextField
                            id="outlined-basic"
                            label="Student Password"
                            variant="outlined"
                            value={studentRegister.StudentPassword}
                            onChange={(e) => fillModel("password", e.target.value)}
                        />
                    </Box>
                    <Box className="gender col-md-5 col-sm-6 mb-5 ">
                        <Typography className='ms-2'> Gender</Typography>
                        <div className='d-flex ms-2'>
                            <label htmlFor="Male" className='me-5 mt-3'>
                                <input
                                    type="radio"
                                    value="Male"
                                    checked={selectedGender === 'Male'}
                                    onChange={handlechange}
                                />
                                Male
                            </label>
                            <label htmlFor="Female" className='mt-3'>
                                <input
                                    type="radio"
                                    value="Female"
                                    checked={selectedGender === 'Female'}
                                    onChange={handlechange}
                                />
                                Female
                            </label>
                        </div>
                    </Box>
                    <Box className="col-md-5 col-sm-6 mb-5  dob">
                        <Box className='d-flex flex-column w-100'>
                            <label htmlFor="dob" className='me-4 ' style={{ marginBottom: "0.5rem " }}>Date of Birth:</label>
                            <input
                                type="date"
                                id="dob"
                                name="dob"
                                value={studentRegister.birth}
                                onChange={(e: any) => fillModel('birth', e.target.value)}
                                className=' rounded-2 py-2 px-4 w-75 '

                            />
                        </Box>
                    </Box>
                    <Box className="col-md-5 col-sm-6 mb-5   qualification" style={{ marginTop: "5px" }}>
                        <Box>
                            <Typography className='ms-2 mb-2'>Qualification</Typography>
                            <select name="qualification" className='qualification-dropdown ms-2' value={studentRegister.qualification} onChange={(e: any) => fillModel('qualification', e.target.value)}>
                                <option value="">Select</option>
                                {
                                    myqualification.map((obj, index) => {
                                        return (
                                            <option value={obj} key={index}>{obj}</option>
                                        )
                                    })
                                }
                            </select>
                        </Box>
                    </Box>
                    <Box className="col-md-5 col-sm-6 mb-5  section">
                        <Box>
                            <Typography className='ms-2 mb-2'>Section</Typography>
                            <select name="section" className='section-dropdown' value={studentRegister.Section} onChange={(e: any) => fillModel('Section', e.target.value)}>
                                <option value="">Select</option>
                                {
                                    mySection.map((obj, index) => {
                                        return (
                                            <option value={obj} key={index}>{obj}</option>
                                        )
                                    })
                                }
                            </select>
                        </Box>
                    </Box>
                    <Box className="col-md-5 col-sm-6 mb-5  course">
                        <Box>
                            <Typography className='mb-2 ms-2'>Course</Typography>
                            <select name="course" className='Course-dropdown ms-2' value={studentRegister.course} onChange={(e: any) => fillModel('course', e.target.value)}>
                                <option value="">Select</option>
                                {
                                    CourseList.map((obj: any, index: any) => {
                                        return (
                                            <option value={obj.CourseName} key={index}>{obj.CourseName}</option>
                                        )
                                    })
                                }
                            </select>
                        </Box>
                    </Box>
                    <Box className="Country col-md-5 col-sm-6  mb-5">
                        <Typography className='ms-2'>Country</Typography>
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            value="pakistan"
                            disabled
                        />
                    </Box>
                    <Box className="City col-md-5 col-sm-6  mb-5">
                        <Typography className='ms-2'>City</Typography>
                        <select name="city" id="" className='city-dropdown ms-2' value={studentRegister.city} onChange={(e) => fillModel("city", e.target.value)}>
                        <option value="">Select</option>
                            {
                               city.map((city: any, i: any) => {
                                    return (
                                        <option value={city} key={i}>{city}</option>
                                    )
                                })
                            }
                        </select>
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