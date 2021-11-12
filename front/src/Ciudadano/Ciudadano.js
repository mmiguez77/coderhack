import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../App.css";

import React, { useEffect, useState } from "react";
import {
  amarillo,
  banner,
  blanco,
  btnCards,
  cardCategoria,
  cardCategoriaReverse,
  categoryList,
  containerComoAyudar,
  contenedorCarousel,
  contenedorCategorias,
  contenedorComoAyudar,
  rosa,
  turquesa,
  verde,
  wrapper,
} from "./Ciudadano.module.scss";

import Card from "../Components/Card/Card";
import OwlCarousel from "react-owl-carousel";
import bioplasticos from "../assets/iconoBioplasticos.png";
import economiaIcono from "../assets/economiaIcono.png";
import iconoCiudadanos from "../assets/iconoCiudadanos.png";
import iconoConsumo from "../assets/consumoResponsableIcono.png";
import tortuga from "../assets/fotoTortuga.png";

const Ciudadano = () => {
  let transformacion = "#transformacion";
  let comunidad = "#comunidad";
  let tejido = "#tejido";
  let accion = "#accion";
  let reduccion = "#reduccion";

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


  BasuraData.map((item) => console.log(item._id));

  return (
    <>
      <div class={banner}>
        <div class={wrapper}>
          <h2>
            {" "}
            <span></span>
          </h2>
        </div>
        <div className={containerComoAyudar}>
          <h2>
            ¿cómo <br />
            <span>participar?</span>
          </h2>
          <p>
            1. explora todas lxs categorías de emprendimientos <br />
            2.escoge el emprendimiento que te gustaría apoyar para resolver su
            reto y da click <br />
            3.responde las preguntas y comienza tu colaboración de co-creación
          </p>
        </div>
      </div>
      <div className={contenedorCategorias}>
        <ul className={categoryList}>
          <li className={rosa}>
            {" "}
            <a href={comunidad}>
              comunidad e <br />
              innovación
            </a>
          </li>
          <li className={verde}>
            <a href={tejido}>tejido social</a>
          </li>
          <li className={turquesa}>
            <a href={reduccion}>
              reducción de <br />
              desigualdades
            </a>
          </li>
          <li className={blanco}>
            <a href={accion}>
              acción <br /> climática
            </a>
          </li>
          <li className={amarillo}>
            {" "}
            <a href={transformacion}>
              {" "}
              transformación <br /> social
            </a>
          </li>
        </ul>
      </div>
      <div className={contenedorComoAyudar}>
        <div>
          <h3>
            ¿cómo puedo <span>ayudar?</span>
          </h3>
          <p>
            como ciudadanx, podré aportar ideas sobré cómo los emprendedores
            pueden resolver sus retos, apoyándolos desde mi área de conocimiento
          </p>
        </div>
        <img src={iconoCiudadanos} />
      </div>
      <div className={cardCategoria}>
        <article>
          <h3 id="comunidad">_comunidad e innovación</h3>
          <p>
            los avances tecnológicos son esenciales para encontrar soluciones a
            los desafíos económicos y ambientales. Por ello es importante la
            promoción de industrias sostenibles y la inversión en investigación
            e innovación científicas.
          </p>
        </article>
        <div className="contenedorImagenCard">
          <img src={tortuga} />
        </div>
      </div>
      <div className={contenedorCarousel}>
        <OwlCarousel
          className="owl-theme"
          autoplay
          loop
          margin={10}
          nav
          items="3"
        >
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
        </OwlCarousel>
        <button className={btnCards}>ver todos</button>
      </div>
      <div className={cardCategoriaReverse}>
        <article>
          <h3 id="tejido">_tejido social</h3>
          <p>
            contribuir para satisfacer las necesidades humanas elementales,
            como: alimento, salud, educación, seguridad social, cultura,
            deporte, servicios públicos, transporte y todo lo que represente a
            una mejor calidad de vida.
          </p>
        </article>
        <div className="contenedorImagenCard">
          <img src={tortuga} />
        </div>
      </div>
      <div className={contenedorCarousel}>
        <OwlCarousel
          className="owl-theme"
          autoplay
          loop
          margin={10}
          nav
          items="3"
        >
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
        </OwlCarousel>
        <button className={btnCards}>ver todos</button>
      </div>
      <div className={cardCategoria}>
        <article>
          <h3 id="reduccion">_reducción de desigualdades</h3>
          <p>
            es necesario adoptar ideas innovadoras que empoderen a las personas
            de bajos ingresos y promuevan la inclusión económica de todxs,
            independientemente de su género, raza o etnia.
          </p>
        </article>
        <div className="contenedorImagenCard">
          <img src={tortuga} />
        </div>
      </div>
      <div className={contenedorCarousel}>
        <OwlCarousel
          className="owl-theme"
          autoplay
          loop
          margin={10}
          nav
          items="3"
        >
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
        </OwlCarousel>
        <button className={btnCards}>ver todos</button>
      </div>
      <div className={cardCategoriaReverse}>
        <article>
          <h3 id="accion">_acción climática</h3>
          <p>
            las emisiones de gases de efecto invernadero continúan aumentando, y
            el calentamiento global está provocando cambios cuyas consecuencias
            pueden ser irreversibles. Necesitamos ideas que permitán que esto no
            siga empeorando.
          </p>
        </article>
        <div className="contenedorImagenCard">
          <img src={tortuga} />
        </div>
      </div>
      <div className={contenedorCarousel}>
        <OwlCarousel
          className="owl-theme"
          autoplay
          loop
          margin={10}
          nav
          items="3"
        >
                    {contaminacionData.map((item) => (  // HECHO
            <div class="item" key={item._id}>
              <Card
                img={"item.logo"}
                title={item.challenge}
                description={item.description}
                boton="quiero apoyar"
                item={item}
              />
            </div>
          ))}
        </OwlCarousel>
        <button className={btnCards}>ver todos</button>
      </div>
      <div className={cardCategoria}>
        <article>
          <h3 id="transformacion">_transformación social</h3>
          <p>
            el objetivo de lograr una educación inclusiva y de calidad para
            todxs se basa en la firme convicción de que la educación es uno de
            los motores más poderosos y probados para garantizar el desarrollo
            sostenible.
          </p>
        </article>
        <div className="contenedorImagenCard">
          <img src={tortuga} />
        </div>
      </div>
      <div className={contenedorCarousel}>
        <OwlCarousel
          className="owl-theme"
          autoplay
          loop
          margin={10}
          nav
          items="3"
        >
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
        </OwlCarousel>
        <button className={btnCards}>ver todos</button>
      </div>
    </>
  );
};

export default Ciudadano;
