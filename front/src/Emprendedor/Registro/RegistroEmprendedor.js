import React, { useEffect, useState } from "react";
import {
  ahoraSi,
  btnCards2,
  btnContinuar,
  categorias,
  circulo,
  contCategoriasReto,
  datos,
  form,
  formBorder,
  imgHerramienta,
  info,
  inputForm,
  options,
  textArea,
  title2,
} from "../Emprendedor.module.scss";

import Axios from "axios";
import Herramienta from "../../assets/herramienta.png";
import { Link } from "react-router-dom";
import Personita from "../../assets/HumaaansSpace.png";
import lamparita from "../../assets/lampara.png";

const RegistroEmprendedor = () => {
  const [usernameData, setUsernameData] = useState([]);
  const [surnameData, setSurnameData] = useState([]);
  const [urlData, setUrlData] = useState([]);
  const [challData, setChallData] = useState([]);
  const [descData, setDescData] = useState([]);
  const [logoData, setLogoData] = useState([]);
  const [empren, setEmpren] = useState([]);
  const [sel, setSel] = useState([]);

  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    fetch("/challenges/user")
      .then((res) => res.json())
      .then((res) => setDataUser(res))
      .catch((err) => {
        console.log(err)
      });
  }, []);

  const reto = () => {
    Axios({
      method: "POST",
      data: {
        challenge: challData,
        entrepreneurshipId: dataUser.id,
        cathegory: sel,
        entrepreneurship: empren,
        description: descData,
        logo: logoData,
        assistence: "NO"
      },
      withCredentials: true,
      url: "/challenges/register",
    }).then((res) => {
      const data = res.data;
      const status = res.status;
      if (data === "User Already Exists") {
        window.location = "/failregister";
      } else if (status === 200 && data !== "User Already Exists") {
        window.location = "/login";
      }
    });
  };

  return (
    <div>
      <div className={formBorder}>
        <div className={circulo}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </div>
        <div>
          <h1 className={title2}>_formulario de registro del reto</h1>
        </div>
        <div>
          <h2 className={datos}>paso 1: datos personales</h2>
        </div>
        <div className="col-6 p-0 d-flex">
          <form className={form}>
            <label className={info} for="name">
              nombre*
            </label>
            <br />
            <input
              className={inputForm}
              type="string"
              id="name"
              required="true"
              placeholder="Nombre"
              value={dataUser.username}
              onChange={(e) => setUsernameData(e.target.value)}
            />
            <br />
            <label className={info} for="name">
              apellido*
            </label>
            <br />
            <input
              className={inputForm}
              type="string"
              id="name"
              required="true"
              placeholder="Apellido"
              value={dataUser.surname}
              onChange={(e) => setSurnameData(e.target.value)}
            />
            <br />
            <label className={info} for="name">
              enlace a página web o redes sociales(opcional)
            </label>
            <br />
            <input
              className={inputForm}
              type="string"
              id="name"
              required="true"
              placeholder="Enlace"
              value="URL"
              onChange={(e) => setUrlData(e.target.value)}
            />
            <br />
          </form>
          <img src={Personita} />
        </div>
      </div>

      {/* registro 2 */}

      <div className={formBorder}>
        <div className={circulo}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </div>
        <div>
          <h1 className={title2}>_formulario de registro del reto</h1>
        </div>
        <div>
          <h2 className={datos}>paso 2: datos del emprendimeinto</h2>
        </div>
        <div className="col-6 p-0 d-flex">
          <form className={form}>
            <label className={info} for="string">
              nombre del emprendimiento (opcional)
            </label>
            <br />
            <input
              className={inputForm}
              type="string"
              placeholder="Emprendimiento"
              onChange={(e) => setChallData(e.target.value)}
            />
            <label className={info} for="string">
              descripción del emprendimiento (opcional)
            </label>
            <br />
            <input
              className={inputForm}
              type="string"
              placeholder="Descripción"
              onChange={(e) => setDescData(e.target.value)}
            />
            <br />
            <label className={info} for="submit">
              a continuación, carga el logo de la empresa o emprendimiento
            </label>
            <br />
            <input type="file" onChange={(e) => setLogoData(e.target.value)} />
            <br />
            {/* <label className={info} for="string">enlace a un breve video sobre el emprendimiento (opcional)</label>
                        <br />
                        <input className={inputForm} type="string" placeholder="Emprendimiento" />
                        <br />
                        <input type="file" /> */}
            <br />
          </form>
          <img src={lamparita} />
        </div>
      </div>

      {/* registro 3 */}
      <div className={formBorder}>
      <div className={circulo}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </div>
      <div>
        <h1 className={title2}>_formulario de registro del reto</h1>
      </div>
      <div>
        <h2 className={datos}>paso 3: datos del reto</h2>
      </div>
      <div className="row d-flex">
        <div className="col-6">
          <form className={form}>
            <p className={info}>
              contesta las siguientes preguntas guía para ayudarte a definir
              cual es tu mayor reto para el que recibirás apoyo (opcional)
            </p>
            <label className={info} for="string">
              1. ¿cúal es el mayor reto que vive hoy tu emprendimiento?
            </label>
            <label className={info} for="string">
              2. ¿por qué crees que tienes este reto?¿Hay alguna otra ausente?
            </label>
            <label className={info} for="string">
              3. ¿quien es el usuario que se ve más afectador tu reto? (ejemplo:
              personas de tu equipo)
            </label>
          </form>
        </div>
        <img
          src={Herramienta}
          className={imgHerramienta}
          alt="Img Herramienta"
        />
      </div>
      <div className={ahoraSi}>
        <h4 className={info}>
          ahora sí, ya estas listo para subir el principal reto que quieres
          compartir con la <br /> comunidad de ciudadanos para que puedan
          ayudarte a resolverlo*
        </h4>
      </div>
      <form className={form}>
        <textarea
          rows="5"
          type="string"
          className={textArea}
          placeholder="Escribilo acá"
          onChange={(e) => setEmpren(e.target.value)}
        />
      </form>
      <div className={ahoraSi}>
        <h2 className={info}>asigna una categoría a tu reto</h2>
      </div>
      <div className={contCategoriasReto}>
        <select onChange={(e) => setSel(e.target.value)}>
            <option value="comunidad e innovación">comunidad e innovación</option>
            <option value="tejido social socialaab">tejido social</option>
            <option value="reducción de desigualdades">reducción de desigualdades</option>
            <option value="transformación social">transformación social</option>
            <option value="acción climatica">acción climatica</option>
            <option value="otra">otra</option>
        </select>
      </div>
      <div>
        <Link to={`/VistaPreviarReto`}>
          <button className={btnCards2} onClick={reto}>Vista previa del reto</button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default RegistroEmprendedor;
