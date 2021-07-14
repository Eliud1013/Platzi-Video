import React, { useState } from "react";
import googleIcon from "../assets/static/google-icon.png";
import twitterIcon from "../assets/static/twitter-icon.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginRequest } from "../actions/actions";

import "../assets/styles/containers/Login.scss";

const Login = (props) => {
  const [form, setForm] = useState({
    email: "",
  });

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push("/");
    console.log(form);
  };
  return (
    <section className="login">
      <section className="login__container">
        <h2>Inicia sesión</h2>
        <form className="login__container--form" onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            placeholder="Correo"
            name="email"
            onChange={handleInput}
          />
          <input
            className="input"
            type="password"
            placeholder="Contraseña"
            name="password"
            onChange={handleInput}
          />
          <button className="button">Iniciar sesión</button>
          <div className="login__container--remember-me">
            <label>
              <input type="checkbox" id="cbox1" value="first_checkbox" />
              Recuérdame
            </label>
            <Link to="/">Olvidé mi contraseña</Link>
          </div>
        </form>
        <section className="login__container--social-media">
          <div>
            <img alt="blabla" src={googleIcon} /> Inicia sesión con Google
          </div>
          <div>
            <img alt="blabla" src={twitterIcon} /> Inicia sesión con Twitter
          </div>
        </section>
        <p className="login__container--register">
          No tienes ninguna cuenta <Link to="/register">Regístrate</Link>
        </p>
      </section>
    </section>
  );
};
const mapDispatchToProps = {
  loginRequest,
};
export default connect(null, mapDispatchToProps)(Login);
