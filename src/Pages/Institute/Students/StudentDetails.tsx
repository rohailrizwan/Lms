import React from 'react'
import { useParams } from 'react-router-dom'
import {useEffect,useState} from "react"

import { Paper, Table, TableBody, TableCell, TableContainer, TableRow, tableCellClasses } from '@mui/material'
import { styled } from '@mui/material/styles';
import { Fbgetid } from '../../../Config/FirebaseMethod';

export default function StudentDetails() {
    const [StudentObject,SetStudentObject]=useState<any>({})
    const { institute, id } = useParams();
    console.log(institute,id)
    useEffect(()=>{
        Fbgetid(`Students/${institute}`,id).then((res:any)=>{
                // console.log(res)
                SetStudentObject(res)
        }).catch((err)=>{
          alert(err)
        })
    },[])

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
  return (
    <div>
        <div className="container">
            <h1 style={{color:"blueviolet"}} className='mb-5'>Student Detail</h1>

            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableBody>
          <TableRow> 
            <StyledTableCell>Student Name</StyledTableCell>
            <StyledTableCell>{StudentObject.name}</StyledTableCell>
          </TableRow>
          <TableRow> 
            <StyledTableCell>Father Name</StyledTableCell>
            <StyledTableCell>{StudentObject.FatherName}</StyledTableCell>
          </TableRow>
          <TableRow> 
            <StyledTableCell>Student Cnic</StyledTableCell>
            <StyledTableCell>{StudentObject.StudentCnic}</StyledTableCell>
          </TableRow>
          <TableRow> 
            <StyledTableCell>Student Contact</StyledTableCell>
            <StyledTableCell>{StudentObject.StudentContact}</StyledTableCell>
          </TableRow>
          <TableRow> 
            <StyledTableCell>Student Address</StyledTableCell>
            <StyledTableCell>{StudentObject.StudentAddresss}</StyledTableCell>
          </TableRow>
          <TableRow> 
            <StyledTableCell>Student Email</StyledTableCell>
            <StyledTableCell>{StudentObject.email}</StyledTableCell>
          </TableRow>
          <TableRow> 
            <StyledTableCell>student password</StyledTableCell>
            <StyledTableCell>{StudentObject.password}</StyledTableCell>
          </TableRow>
          <TableRow> 
            <StyledTableCell>Gender</StyledTableCell>
            <StyledTableCell>{StudentObject.Gender}</StyledTableCell>
          </TableRow>
          <TableRow> 
            <StyledTableCell>Course</StyledTableCell>
            <StyledTableCell>{StudentObject.course}</StyledTableCell>
          </TableRow>
    
          <TableRow> 
            <StyledTableCell>Country</StyledTableCell>
            <StyledTableCell>{StudentObject.country}</StyledTableCell>
          </TableRow>
          <TableRow> 
            <StyledTableCell>City</StyledTableCell>
            <StyledTableCell>{StudentObject.city}</StyledTableCell>
          </TableRow>
          <TableRow> 
            <StyledTableCell>Section</StyledTableCell>
            <StyledTableCell>{StudentObject.Section}</StyledTableCell>
          </TableRow>
          <TableRow> 
            <StyledTableCell>Date  of Birth</StyledTableCell>
            <StyledTableCell>{StudentObject.birth}</StyledTableCell>
          </TableRow>
          <TableRow> 
            <StyledTableCell>Last Qualification</StyledTableCell>
            <StyledTableCell>{StudentObject.qualification}</StyledTableCell>
          </TableRow>
        </TableBody>
        
      </Table>
    </TableContainer>
        </div>
    </div>
  )
}