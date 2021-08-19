import React from 'react';
import {Table,Button } from 'react-bootstrap'

const table = ({makanan , editData}) => {
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
                        <tr key={index} >
                        <td>{index + 1}</td>
                        <td>{makanan.nama}</td>
                        <td>{makanan.deskripsi}</td>
                        <td>
                            <Button className="btn btn-success" onClick={()=> editData(makanan.id)}>Edit</Button>
                        </td>
                    </tr>
                    )
                })}
               
               
               
            </tbody>
        </Table>
    );
}

export default table;
