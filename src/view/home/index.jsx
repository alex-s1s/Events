import React from 'react';
import "./home.css";
import Navbar from '../../components/navbar'


function Home() {


    return (
        <>
            <Navbar></Navbar>
            <section className="list-back" >
                <div className="shadow p-3 mb-5 bg-white rounded list-border my-3">
                    <h2 class="pb-4 pt-2">Processos</h2>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Buscar processos" aria-label="Buscar processos" aria-describedby="basic-addon2" />
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button">Buscar</button>
                        </div>
                    </div>

                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default Home;