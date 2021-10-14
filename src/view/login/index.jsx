import React from 'react';
import "./login.css"

export default function Login() {
    return (
        <div className="login-content d-flex align-items-center">
            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 text-white font-weight-bold">Login</h1>
                </div>

                <input type="email" class="form-control my-2" id="floatingInput" placeholder="Email" />
                <input type="password" class="form-control my-2 " id="floatingPassword" placeholder="Senha" />


                <button className="w-100 btn btn-lg btn-primary btn-login" type="submit">Sign in</button>


                <div className="msg-login text-white text-center my-5">
                    <span><strong>WoW!</strong> Você está conectado! &#128526;</span>
                    <br/>
                    <span><strong>Ops!</strong> Verifique se a senha ou usuário estão corretos! &#128549;</span>
                </div>

                <div className="op-login mt-3 text-center">
                    <a href="" className="mb-3">Recuperar senha</a>
                </div>
            </form>
        </div>

    )
}