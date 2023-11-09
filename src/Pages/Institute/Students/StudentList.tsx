import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FbgetList } from '../../../Config/FirebaseMethod';

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


export default function StudentList() {
    const navigate = useNavigate();
    const param = useParams()
    // console.log(param.id)
    const [StudentList, SetStudentList] = useState<any>([]);

    useEffect(() => {
        FbgetList(`Students/${param.id} Institute`).then((res) => {
            // console.log(res);
            SetStudentList(res);
        }).catch((err)=>{
            alert(err)
        })
    }, []);

    return (
        <div className="container">
            <div className='d-flex justify-content-between mb-5'>
                <h1 style={{ color: "blueviolet" }}>Student List</h1>
                <button style={{ backgroundColor: "blueviolet", width: "150px", height: "50px", color: "white" }} className='btn' onClick={() => navigate(`AddStudent`)}>Add Student</button>
            </div>
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Student Name</StyledTableCell>
                            <StyledTableCell >Father Name</StyledTableCell>
                            <StyledTableCell >Course</StyledTableCell>
                            <StyledTableCell >Details</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {StudentList.map((obj: any) => (
                            <StyledTableRow key={obj}>
                                <StyledTableCell component="th" scope="obj">
                                    {obj.name}
                                </StyledTableCell>
                                <StyledTableCell >{obj.FatherName}</StyledTableCell>
                                <StyledTableCell >{obj.course}</StyledTableCell>
                                {/* <StyledTableCell ><Link to={`/${param.id}Institute/StudentDetails/${obj.id}`}>Details</Link></StyledTableCell> */}
                                <StyledTableCell>
                                    <Link to={`StudentDetails/${param.id} Institute/${obj.id}`}>Details</Link>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
