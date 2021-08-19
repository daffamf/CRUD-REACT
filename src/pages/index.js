import React, { Component } from 'react';
import Navbar from './Navbar/index'
import Table from './Table/index'
import Tambah from './Formulir/index'


export default class crud extends Component {
    constructor(props) {
        super(props)
        this.state = {
            makanan: [],
            nama: "",
            deskripsi: "",
            id: "",

        }

    }

    handelChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value

        })


    }

    handelSumbit = (event) => {
        event.preventDefault();

        if (this.state.id === "") {
            this.setState({
                makanan: [
                    ...this.state.makanan,
                    {
                        id: this.state.makanan.length + 1,
                        nama: this.state.nama,
                        deskripsi: this.state.deskripsi
                    }
                ]
            })
        } else {
            const makananSelaindiPilih = this.state.makanan
                .filter((makanan) => makanan.id !== this.state.id)
                .map((filterMakanan) => {
                    return filterMakanan
                })
                this.setState({
                    makanan: [
                        ...makananSelaindiPilih,
                        {
                            id: this.state.makanan.length + 1,
                            nama: this.state.nama,
                            deskripsi: this.state.deskripsi
                        }
                    ]
                })
        }


        this.setState({

            nama: "",
            deskripsi: "",
            id: "",

        })
    }


        editData = (id) => {
            const PilihMakanan = this.state.makanan
                .filter((makanan) => makanan.id === id)
                .map((filterMakanan) => {
                    return filterMakanan
                })

            this.setState({
                nama: PilihMakanan[0].nama,
                deskripsi: PilihMakanan[0].deskripsi,
                id: PilihMakanan[0].id,

            })
        }

        hapusData = (id) => {
            const makananBaru = this.state.makanan
                .filter((makanan) => makanan.id !== id)
                .map((filterMakanan) => {
                        return filterMakanan
            })
            this.setState({
                makanan:makananBaru
            })
        }




        render() {

            return (
                <div>
                    <Navbar />


                    <div className="container mt-4">
                        <Table makanan={this.state.makanan} editData={this.editData} hapusData={this.hapusData} />
                        <Tambah {...this.state} handelChange={this.handelChange} handelSumbit={this.handelSumbit} />
                    </div>
                </div>
            );
        }
    }
