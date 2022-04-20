import "./home.css";
import Navbar from "../../components/navbar";
import List from "../../components/list/list";
import React, { useEffect, useState } from "react";
import api from "../../services/api";
import axios from "axios";

function Home() {
  const finalidade = [
    { id: 1, tipo: "Residencial", name: "Residencial" },
    { id: 2, tipo: "Comercial", name: "Comercial" },
    { id: 3, tipo: "Industrial", name: "Industrial" },
    { id: 4, tipo: "Indefinida", name: "Consultar" },
    { id: 5, tipo: "Rural", name: "Rural" },
    { id: 6, tipo: "incorporação", name: "Incorporacao" },
    { id: 7, tipo: "Misto", name: "Misto" },
  ];

  const imoveis = [
    { id: 1, tipo: "Apartamento", name: "Apartamento" },
    { id: 2, tipo: "Área", name: "Areas_app" },
    { id: 3, tipo: "Áreas c/APP", name: "Areas_app" },
    { id: 4, tipo: "Box garagem", name: "Box_garagem" },
    { id: 5, tipo: "Casa", name: "Casa" },
    { id: 6, tipo: "casa em condomínio", name: "Casa_condominio" },
    { id: 7, tipo: "Chácara/Sítio", name: "Chacara_sitio" },
    { id: 8, tipo: "Fazenda", name: "Fazenda" },
    { id: 9, tipo: "Flat/Hotel", name: "flat_hotel" },
    { id: 10, tipo: "Galpão", name: "Galpao" },
    { id: 11, tipo: "Prédio", name: "Predio" },
    { id: 12, tipo: "Sala", name: "Apartamento" },
    { id: 13, tipo: "Loja/Salão comercial", name: "Loja_Salao_Comercial" },
    { id: 13, tipo: "Lote em condomínio", name: "Lote_Condominio" },
    { id: 13, tipo: "Outros", name: "Outros" },
  ];

  const cidade = [
    { id: 1, name: "Acre", sigla: "ac" },
    { id: 2, name: "Alagoas", sigla: "al" },
    { id: 3, name: "Amazonas", sigla: "am" },
    { id: 4, name: "Amapá", sigla: "ap" },
    { id: 5, name: "Bahia", sigla: "ba" },
    { id: 6, name: "Ceará", sigla: "ce" },
    { id: 7, name: "Distrito Federal", sigla: "df" },
    { id: 8, name: "Espirito Santo", sigla: "es" },
    { id: 9, name: "goiás", sigla: "go" },
    { id: 10, name: "Maranhão", sigla: "ma" },
    { id: 11, name: "Minas Gerais", sigla: "mg" },
    { id: 12, name: "Mato Grosso do sul", sigla: "ms" },
    { id: 13, name: "Mato Grosso", sigla: "mt" },
    { id: 14, name: "Pará", sigla: "pa" },
    { id: 15, name: "Paraíba", sigla: "pb" },
    { id: 16, name: "Pernambuco", sigla: "pe" },
    { id: 17, name: "Piauí", sigla: "pi" },
    { id: 18, name: "Paraná", sigla: "pr" },
    { id: 19, name: "Rio de Janeiro", sigla: "rj" },
    { id: 20, name: "Rio Grande do Norte", sigla: "rn" },
    { id: 21, name: "Rondônia", sigla: "ro" },
    { id: 22, name: "Roraima", sigla: "rr" },
    { id: 23, name: "Rio Grande do Sul", sigla: "rs" },
    { id: 24, name: "Santa Catarina", sigla: "sc" },
    { id: 25, name: "Sergipe", sigla: "se" },
    { id: 26, name: "São paulo", sigla: "sp" },
    { id: 27, name: "Tocantins", sigla: "to" },
  ];

  const url = [];
  const url2 = [];
  const url3 = [];
  const url4 = [];
  const urltext = [];
  var urlVirg = [];

  const handleChange = (event) => {
    let value = event.target.checked;
    let name = event.target.name;

    if (value) {
      url.push(name);
    } else {
      var index = url.indexOf(name);
      if (index > -1) {
        url.splice(index, 1);
      }
    }
    var pos = url.indexOf("https://resale.com.br/busca?finalidade=");
    if (pos === -1) {
      url.unshift("https://resale.com.br/busca?finalidade=");
    }
    var arrf = url.concat(url2, url3);
    urlVirg = arrf.join();
    console.log(urlVirg);
  };

  const handleChangeImoveis = (event) => {
    let value = event.target.checked;
    let name = event.target.name;

    var pos = url2.indexOf("&tipo-imovel=");

    if (pos === -1) {
      url2.push("&tipo-imovel=");
    }

    var pos1 = url.indexOf("https://resale.com.br/busca?finalidade=");

    if (pos1 === -1) {
      url.unshift("https://resale.com.br/busca?finalidade=");
    }

    if (value) {
      url2.push(name);
    } else {
      var index = url2.indexOf(name);
      if (index > -1) {
        url2.splice(index, 1);
      }
    }

    var arrf = url.concat(url2, url3);

    urlVirg = arrf.join();
    console.log(urlVirg);
  };

  const handleChangeCity = (event) => {
    let value = event.target.checked;
    let name = event.target.name;

    var pos = url3.indexOf("&search=");
    if (pos === -1) {
      url3.push("&search=");
    }

    var pos1 = url3.indexOf("https://resale.com.br/busca?finalidade=");
    if (pos1 === -1) {
      url3.unshift("https://resale.com.br/busca?finalidade=");
    }

    if (value) {
      url3.push(name);
    } else {
      var index = url3.indexOf(name);
      if (index > -1) {
        url3.splice(index, 1);
      }
    }

    var arrf = url.concat(url2, url3);

    urlVirg = arrf.join();
    console.log(urlVirg);
  };

  // Simple POST request with a JSON body using axios
  function makeGetRequest() {
    const v1 = document.querySelector('input[name="name1"]').value;
    const v2 = document.querySelector('input[name="name2"]').value;

    var pos = url4.indexOf("&valor-min=");
    if (pos === -1) {
      url4.push("&valor-min=" + v1 + ("&valor-max=" + v2));
    }

    var arrf = url.concat(url2, url3, url4);
    urlVirg = arrf.join();

    urltext.push(urlVirg);

    console.log(urltext);
    console.log(urlVirg);

    axios({
      url: "http://192.99.154.119/query",
      contentType: "application/json",
      cache: false,
      method: "POST",
      dataType: "json",
      data: JSON.stringify({
        link: urlVirg,
      }),
      success: function (data) {
        console.log(data);
      },
    });
  }

  return (
    <>
      <Navbar></Navbar>
      <section className="fill">
        <h4>Paulo imóveis</h4>
      </section>
      <section className="list-back">
        <section className="filter">
          <div className="filterDiv">
            <h2>Refinar a minha busca</h2>
            <div>
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Filtrar por cidade
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  {cidade.map((fin) => (
                    <li>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        name={fin.sigla}
                        id={fin.id}
                        onChange={handleChangeCity}
                      />
                      <label class="form-check-label" for={fin.id}>
                        Todas cidade de(o) {fin.name}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="finalidade">
              <h3>Finalidade</h3>

              {finalidade.map((fin) => (
                <div key={fin.id} class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name={fin.name}
                    id={`for${fin.id}`}
                    onChange={handleChange}
                  />

                  <label class="form-check-label" for={`for${fin.id}`}>
                    {fin.tipo}
                  </label>
                </div>
              ))}
            </div>
            <div className="TypeImovel">
              <h3>Tipo de imóvel</h3>
              {imoveis.map((im) => (
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name={im.name}
                    id={`flex${im.id}`}
                    onChange={handleChangeImoveis}
                  />
                  <label class="form-check-label" for={`flex${im.id}`}>
                    {im.tipo}
                  </label>
                </div>
              ))}
            </div>
            <div className="valor">
              valor
              <br />
              <input type="number" id="valor1" name="name1" value="1" />
              =
              <input type="number" id="valor2" name="name2" />
            </div>

            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target=".bd-example-modal-sm"
              className="buttonName"
              onClick={makeGetRequest}
            >
              Filtrar
            </button>

            <div
              class="modal fade bd-example-modal-sm"
              tabindex="-1"
              role="dialog"
              aria-labelledby="mySmallModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-sm">
                <div class="modal-content">Scrap resale.... buscando links</div>
              </div>
            </div>
          </div>
        </section>

        <section className="details"></section>
        <List></List>
      </section>
    </>
  );
}

export default Home;
