import React, { useEffect, useState } from 'react';
import api from '../../services/api'


function List() {

    const [tatu = [], setUser] = useState();

    useEffect(() => {
        api
            .get("links")
            .then((response)  => setUser(response.data ),
            )
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
            console.log()
    }, []);
    console.log(tatu)

    return (
        <div>
            {Object.keys(tatu).map((fin) =>
                <div className="card-container">
                    <div className="card mb-3 shadow p-3 mb-5 bg-white rounded">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={tatu[fin].link} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <p className="card-text2">{
                                        tatu[fin].descricao
                                    }
                                    </p>
                                    <div className="info">
                                       
                                        <div className="valorVenda bold">
                                            <p>Valor de venda</p>
                                            <p>{tatu[fin].valor}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>

    )
}

export default List;