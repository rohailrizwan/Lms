import React, { useEffect } from 'react'
import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { FbgetList, fbLogin } from '../Config/FirebaseMethod';


export default function Login() {
    let logindiv: any = {
        textAlign: "center",
        backgroundColor: "white",
        border: "2px solid none",
        borderRadius: "10px",
        boxShadow: "4px 7px 10px #cab3b3b5",
        padding: "50px"
    }
    const [Institute, SetInstitute] = useState<any>([])
    const param = useParams()
    const [Insvalue, setInsvalue] = useState('')
    const [model, setModel] = useState<any>({});

    const fillModel = (key: string, val: any) => {
        model[key] = val;
        setModel({ ...model });
    };
    let navigate = useNavigate()

    let LoginUser = () => {
        // console.log(model)
        if (param.id == "users") {
            fbLogin(model, param.id).then((res: any) => {
                if (res.userType == "Admin") {
                    navigate(`/Admin`)
                }
                else if (res.userType == "Institute") {
                    navigate(`/Institute/${res.name}`)
                }
            }).catch((err) => {
                alert(err)
            })
        }
        else if (param.id == "Students") {
            fbLogin(model, `Students/${Insvalue}`).then((res: any) => {
                // console.log(res)
                alert("Successfully Login")
                navigate(`/StudentDashboard/${Insvalue}/${res.name}`)
            }).catch((err) => {
                alert(err)
            })
        }
        else {
            alert("no data found")
        }

    };

    useEffect(() => {
        if (param.id == "Students") {
            FbgetList("institute").then((res: any) => {
                // console.log(res)
                SetInstitute(res)
            })
        }
    }, [])
    // console.log(Insvalue)
    return (
        <div>
            <Box style={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", }}>

                <Box style={logindiv}>
                    <Box className='py-3'>
                        <Typography className='fs-3'>
                            Login
                        </Typography>
                    </Box>
                    <Box className="p-3">
                        <TextField
                            variant="outlined"
                            type="email"
                            label="Email"
                            style={{ color: "gray" }}
                            onChange={(e: any) => fillModel("email", e.target.value)}

                        />
                    </Box>
                    <Box className="p-3">
                        <TextField
                            variant="outlined"
                            type="password"
                            label="Password"
                            style={{ color: "gray" }}
                            onChange={(e: any) => fillModel("password", e.target.value)}

                        />
                    </Box>
                    <Box className="p-3 mb-3">
                        <Button variant="contained" onClick={LoginUser}>Login</Button>
                    </Box>

                    <Box className="">
                        {
                            Institute.length > 0 ? (
                                <select name="Institute" id="" className='institute-dropdown' onChange={(e:any)=>setInsvalue(e.target.value+" Institute")}>
                                    <option value="select">Select</option>
                                    {Institute.map((institute: any, index: number) => (
                                        <option key={index} value={institute.InstituteName}>
                                            {institute.InstituteName}
                                        </option>
                                    ))}
                                </select>
                            )
                                : ('')
                        }
                    </Box>

                </Box>

            </Box>
        </div>
    )
}