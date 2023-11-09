import React from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InstituteCourse from './InstituteCourse';
import { FbgetList } from '../../../../Config/FirebaseMethod';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
        
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));





export default function InstituteList() {
    const navigate = useNavigate();
    const [CourseList, SetCourseList] = useState<any>([]);

    useEffect(() => {
      FbgetList("institute").then((res) => {
        console.log(res);
        SetCourseList(res); 
      });
    }, []); 

    return (
        <div className="container">
            <div className='d-flex justify-content-between my-5'>
                <h1 style={{ color: "blueviolet"}} className=' courseList'>Institute List</h1>
                <button style={{ backgroundColor: "blueviolet", width: "150px", height: "50px", color: "white" }} className='btn' onClick={() => navigate(`InstituteCourse`)}>Add Institute</button>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 150 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell className='table-heading'>Institute Name</StyledTableCell>
                            <StyledTableCell className='table-heading' >Number of Campus</StyledTableCell>
                            <StyledTableCell className='table-heading' >Details</StyledTableCell>
                            <StyledTableCell className='table-heading' >Logo</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {CourseList.map((obj: any) => (
                            <StyledTableRow key={obj}>
                                <StyledTableCell component="th" scope="obj">
                                    {obj.InstituteName}
                                </StyledTableCell>
                                <StyledTableCell >{obj.Num_Campus}</StyledTableCell>
                                <StyledTableCell><button className='btn rounded-2' style={{backgroundColor:"blueviolet",color:"white"}} onClick={()=>navigate(`InstituteDetail/${obj.id}`)}>Details</button></StyledTableCell>
                                <StyledTableCell ><img src={obj.Institute_image} style={{ width: "50px", borderRadius: "50%", padding: "5px" }} alt="no image" /></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        
        </div>
    );
}
