import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';

const formulir = ({nama,deskripsi,handelChange,handelSumbit}) => {
    
    return (
        <div className="mt-3">
            <Row>
                <Col>
                    Tambah Data Makanan 
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={handelSumbit}>
                        <Form.Group className="mb-3" controlId="nama">
                            <Form.Label>Makanan</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder= "Tulis Nama Makanan"
                                value = {nama}
                                onChange={(event) => handelChange(event)}
                                name = 'nama'
                                
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Deskripsi</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder= "Tulis Deskripsi Makanan "
                                value={deskripsi}
                                onChange={(event) =>  handelChange(event)} 
                                rows={3}    
                                name = 'deskripsi'
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Tambah
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default formulir;
