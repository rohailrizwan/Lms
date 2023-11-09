
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Fbgetid } from '../../../../Config/FirebaseMethod';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));



export default function InstituteDetail() {
    const [myobj, Setmyobj] = useState<any>({})
    const param = useParams()
    let inst_id=param.id
    //   console.log(param.id)
    useEffect(() => {
        Fbgetid("institute", inst_id).then((res) => {
            // console.log(res)
            Setmyobj(res)
        })
    },[])

    return (
        <div className="container">
            <h1 className='my-5' style={{ color: "blueviolet" }}>Institute Details</h1>
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableBody>
                        <TableRow>
                            <StyledTableCell>Institute Name</StyledTableCell>
                            <StyledTableCell>{myobj.InstituteName}</StyledTableCell>
                        </TableRow>
                        <TableRow>
                            <StyledTableCell>Institute Short Name</StyledTableCell>
                            <StyledTableCell>{myobj.ShortNameInstitute}</StyledTableCell>
                        </TableRow>
                        <TableRow>
                            <StyledTableCell>Institute Address</StyledTableCell>
                            <StyledTableCell>{myobj.Address}</StyledTableCell>
                        </TableRow>
                        <TableRow>
                            <StyledTableCell>Institute contact</StyledTableCell>
                            <StyledTableCell>{myobj.Contact}</StyledTableCell>
                        </TableRow>
                        <TableRow>
                            <StyledTableCell>Institute Image</StyledTableCell>
                            <StyledTableCell><img src={myobj.Institute_image} style={{ width: "50px", borderRadius: "50%", padding: "5px" }} alt="no image" /></StyledTableCell>
                        </TableRow>
                        <TableRow>
                            <StyledTableCell>Institute Owner Email</StyledTableCell>
                            <StyledTableCell>{myobj.Owneremail}</StyledTableCell>
                        </TableRow>
                        <TableRow>
                            <StyledTableCell>Institute Owner Contact</StyledTableCell>
                            <StyledTableCell>{myobj.OwnerContact}</StyledTableCell>
                        </TableRow>
                        <TableRow>
                            <StyledTableCell>Institute Type</StyledTableCell>
                            <StyledTableCell>{myobj.InstituteType}</StyledTableCell>
                        </TableRow>
                        <TableRow>
                            <StyledTableCell>Institute location</StyledTableCell>
                            <StyledTableCell>{myobj.Location}</StyledTableCell>
                        </TableRow>

                        <TableRow>
                            <StyledTableCell>Number of Campus</StyledTableCell>
                            <StyledTableCell>{myobj.Num_Campus}</StyledTableCell>
                        </TableRow>
                    </TableBody>

                </Table>
            </TableContainer>
        </div>
    );
}
