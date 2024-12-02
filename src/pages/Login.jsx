import React from 'react'
import "./Login.css";

const Login = () => {
  return (
    <div>
        <header className="header">
                <img 
                src="https://marcaspelomundo.com.br/wp-content/uploads/2024/04/SwBbenm8oInRAtnNjuvDsEAG051EUnDc9kHKS7bW-1024x576.png"
                alt="carrefour"
                className="logo"></img>
            </header>
    <div className="container">
        <div className="login">
            
            <h2 className="titulo">Olá, Funcionário</h2>
            <p className="subtitulo">Você pode acessar ou criar sua conta abaixo</p>
            <input type="email" className="input" placeholder="E-mail" />
            <input type="senha" className="input" placeholder="Senha" />
            <button className="botao">Entrar</button>
            <a href="#" className="senha-esquecida">
                Esqueci minha senha
            </a>
        </div>
      </div>
    </div>
  )
}

export default Login
