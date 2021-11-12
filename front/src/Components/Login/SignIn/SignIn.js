import 'bootstrap/dist/css/bootstrap.min.css';

import * as Yup from 'yup'

import {Form, Formik} from 'formik';
import React, {useState} from 'react'

import Axios from "axios";
import CampoDeTexto from './CampoDeTexto';
import { Link } from 'react-router-dom';

const Signin = () => {
    const validate = Yup.object({
        email: Yup.string()
        .required("Ingresar Correo Eletronico"),
        password: Yup.string()
        .required("Ingresar contraseña"),
        
    })

    const [dataUserName, setDataUserName] = useState([]);
    const [dataUserPass, setDataUserPass] = useState([]);

    const login = () => {
        Axios({
          method: "POST",
          data: {
            email: dataUserName,
            password: dataUserPass,
          },
          withCredentials: true,
          url: '/user/login',
        }).then((res) => {
            const data = res.data;
            const status = res.status;
            if(data === "No User Exists") {
                window.location = "/faillogin"
            } else if(status === 200 && data !== "No User Exists") {
                window.location = "/"
            }
        });
      };
    
    return (
        <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                  <input
                  onChange={(e) => setDataUserName(e.target.value)}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email"
                  required
                  className="form-control form-control-lg"
                ></input>
                </div>
      
                {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                  <input
                  onChange={(e) => setDataUserPass(e.target.value)}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="password"
                  required
                  className="form-control form-control-lg"
                ></input>
                </div>
      
                <div className="d-flex justify-content-around align-items-center mb-4">
                  <Link to="/register">
                <button className="btn btn-secondary">
                  Crear nueva cuenta
                </button>
              </Link>
                </div>
      
                {/* <!-- Submit button --> */}
                <span onClick={login} type="submit" className="btn btn-primary btn-lg btn-block" style={{color:"white"}}>Iniciar</span>
      
              </form>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Signin
 