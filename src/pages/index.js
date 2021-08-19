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

       this.setState({
           makanan: [
               ...this.state.makanan,
               {
                   id : this.state.makanan.length + 1,
                   nama:this.state.nama,
                   deskripsi:this.state.deskripsi
               }
           ]
       })
    }


    render() {
      
        return (
            <div>
                <Navbar />


                <div className="container mt-4">
                    <Table makanan={this.state.makanan}/>
                    <Tambah {...this.state} handelChange={this.handelChange} handelSumbit={this.handelSumbit} />
                </div>
            </div>
        );
    }
}
