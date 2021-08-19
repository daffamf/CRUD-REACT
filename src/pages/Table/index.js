import React from 'react';
import {Table } from 'react-bootstrap'

const table = ({makanan}) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Makanan</th>
                    <th>Deskripsi</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {makanan.map((makanan,index)=>{
                    return(
                        <tr>
                        <td>{index + 1}</td>
                        <td>{makanan.nama}</td>
                        <td>{makanan.deskripsi}</td>
                        <td></td>
                    </tr>
                    )
                })}
               
               
               
            </tbody>
        </Table>
    );
}

export default table;
