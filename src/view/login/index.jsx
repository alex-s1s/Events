import React, { useState } from "react";
import "./login.css";
import { Redirect } from "react-router-dom";

import firebase from "../../config/firebase";
import "firebase/auth";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function Login() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [msgTipo, setMsgTipo] = useState();

  const dispatch = useDispatch();
  function logar() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then((resultados) => {
        setMsgTipo("sucesso");
        setTimeout(() => {
          dispatch({ type: "LOG_IN", usuarioEmail: email });
        }, 2000);
      })
      .catch((erro) => {
        setMsgTipo("erro");
      });
  }

  return (
    <div className="login-content d-flex align-items-center">
      {useSelector((state) => state.usuarioLogado) > 0 ? (
        <Redirect to="/Home" />
      ) : null}

      <form className="form-signin mx-auto">
        <div className="text-center mb-4">
          <h1 className="h3 mb-3 text-white font-weight-bold">Login</h1>
        </div>

        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          class="form-control my-2"
          id="floatingInput"
          placeholder="Email"
        />
        <input
          onChange={(e) => setSenha(e.target.value)}
          type="password"
          class="form-control my-2 "
          id="floatingPassword"
          placeholder="Senha"
        />

        <button
          onClick={logar}
          className="w-100 btn btn-lg btn-primary btn-login"
          type="button"
        >
          Logar
        </button>

        <div className="msg-login text-white text-center my-5">
          {msgTipo === "sucesso" && (
            <span>
              <strong>WoW!</strong> Você está conectado! &#128526;
            </span>
          )}
          {msgTipo === "erro" && (
            <span>
              <strong>Ops!</strong> Verifique se a senha ou usuário estão
              corretos! &#128549;
            </span>
          )}
        </div>

        <div className="op-login mt-3 text-center">
          <a href="#" className="mb-3">
            Recuperar senha
          </a>
        </div>
      </form>
    </div>
  );
}
