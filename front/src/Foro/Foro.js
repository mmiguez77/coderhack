import React, { useEffect, useState } from "react";
// import {main, banner, word} from './Foro.module.scss'
import {
  amarillo,
  banner,
  barraColorAmarillo,
  barraColorBlanco,
  barraColorRoja,
  barraColorTurquesa,
  barraColorVerde,
  blanco,
  cardsForo,
  categoryList,
  ciudadanosTexto,
  containerComoAyudar,
  contenedorCategorias,
  rosa,
  turquesa,
  verde,
} from "./Foro.module.scss";

import Card from "../Components/Card/Card";

const Foro = () => {
  const url = "/challenges";
  const [itemData, setItemData] = useState([]);
  const [BasuraData, setBasuraData] = useState([]);
  const [tecnologiaData, setTecnologiaData] = useState([]);
  const [reciclarData, setReciclarData] = useState([]);
  const [energiaData, setEnergiaData] = useState([]);
  const [contaminacionData, setContaminacionData] = useState([]);
  const [deporteData, setDeporteData] = useState([]);
  const [inclusionData, setInclusionData] = useState([]);

  useEffect(() => {
    getWithFetch();
    getBasuraWithFetch();
    getTecnologiaWithFetch();
    getReciclarWithFetch();
    getEnergiaWithFetch();
    getContaminacionWithFetch();
    getDeporteWithFetch();
    getInclusionWithFetch();
  }, []);

  const getWithFetch = async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    setItemData(jsonData);
  };

  const getBasuraWithFetch = async () => {
    const response = await fetch("/challenges?cathegory=basura");
    const jsonData = await response.json();
    setBasuraData(jsonData);
  };

  const getTecnologiaWithFetch = async () => {
    const response = await fetch("/challenges?cathegory=tecnologia");
    const jsonData = await response.json();
    setTecnologiaData(jsonData);
  };

  const getReciclarWithFetch = async () => {
    const response = await fetch("/challenges?cathegory=reciclar");
    const jsonData = await response.json();
    setReciclarData(jsonData);
  };

  const getEnergiaWithFetch = async () => {
    const response = await fetch("/challenges?cathegory=energia");
    const jsonData = await response.json();
    setEnergiaData(jsonData);
  };

  const getContaminacionWithFetch = async () => {
    const response = await fetch("/challenges?cathegory=contaminacion");
    const jsonData = await response.json();
    setContaminacionData(jsonData);
  };

  const getDeporteWithFetch = async () => {
    const response = await fetch("/challenges?cathegory=deporte");
    const jsonData = await response.json();
    setDeporteData(jsonData);
  };

  const getInclusionWithFetch = async () => {
    const response = await fetch("/challenges?cathegory=inclusion");
    const jsonData = await response.json();
    setInclusionData(jsonData);
  };

  return (
    <div>
      <div class={banner}>
        <p className={ciudadanosTexto}>
          _bienvenidx a este espacio de co-creación
        </p>
        <div className={containerComoAyudar}>
          <h2>
            ¿qué puedo <br />
            <span>encontrar?</span>
          </h2>
          <p>
            aquí encontrarás todos los retos de los emprendimentos con los que
            puedes interactuar para aportar tu granito de arena, con el objetivo
            de ayudar a los emprendedorxs a encontrar la mejor forma de
            resolverlos, a través de la inteligencia colectiva
          </p>
        </div>
      </div>
      <div className={contenedorCategorias}>
        <ul className={categoryList}>
          <li className={rosa}>
            {" "}
            <a>
              comunidad e <br />
              innovación
            </a>{" "}
          </li>
          <li className={verde}>
            {" "}
            <a>tejido social</a>{" "}
          </li>
          <li className={turquesa}>
            {" "}
            <a>
              reducción de <br />
              desigualdades
            </a>{" "}
          </li>
          <li className={blanco}>
            {" "}
            <a>
              {" "}
              acción <br /> climática
            </a>
          </li>
          <li className={amarillo}>
            {" "}
            <a>
              transformación <br /> social{" "}
            </a>
          </li>
        </ul>
      </div>
      <div className={cardsForo}>
        <div className={barraColorAmarillo}></div>
        {BasuraData.map(
            (
              item // HECHO
            ) => (
              <div class="item" key={item._id}>
                <Card
                  img={"item.logo"}
                  title={item.challenge}
                  description={item.description}
                  id={item._id}
                  boton="quiero apoyar"
                  item={item}
                />
              </div>
            )
          )}
      </div>
      <div className={cardsForo}>
        <div className={barraColorTurquesa}></div>
        {tecnologiaData.map(
            (
              item // HECHO
            ) => (
              <div class="item" key={item._id}>
                <Card
                  img={"item.logo"}
                  title={item.challenge}
                  description={item.description}
                  id={item._id}
                  boton="quiero apoyar"
                  item={item}
                />
              </div>
            )
          )}
      </div>
      <div className={cardsForo}>
        <div className={barraColorRoja}></div>
        {reciclarData.map((item) => (  // HECHO
            <div class="item" key={item._id}>
              <Card
                img={"item.logo"}
                title={item.challenge}
                description={item.description}
                id={item._id}
                boton="quiero apoyar"
                item={item}
              />
            </div>
          ))}
      </div>
      <div className={cardsForo}>
        <div className={barraColorVerde}></div>
        {contaminacionData.map((item) => (  // HECHO
            <div class="item" key={item._id}>
              <Card
                img={"item.logo"}
                title={item.challenge}
                description={item.description}
                id={item._id}
                boton="quiero apoyar"
                item={item}
              />
            </div>
          ))}
      </div>
      <div className={cardsForo}>
        <div className={barraColorBlanco}></div>
        {deporteData.map((item) => (  // HECHO
            <div class="item" key={item._id}>
              <Card
                img={"item.logo"}
                title={item.challenge}
                description={item.description}
                id={item._id}
                boton="quiero apoyar"
                item={item}
              />
            </div>
          ))}
      </div>
      {/* <section className={main}>
        <h1 className={word}>
            ¡Estas a un paso de ayudar con tus ideas!
        </h1>
    </section>
    <section className={banner}>
        <h2>
            Aca va algo pero no sé que 😅
        </h2>
    </section>
    <section className="container">
        <h2>
            <b>_Nos gustaria saber</b>
        </h2>
    </section>
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div>
                    <input type="text" name="name" value="name" placeholder="Tu nombre" />
                    <input type="text" name="city" value="city" placeholder="Tu ciudad" />
                </div>
            </div>
        </div>
    </div> */}
    </div>
  );
};

export default Foro;
