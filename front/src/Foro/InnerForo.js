import React, { useEffect, useState } from "react";
import { bannerInner, btnComentar, contBotones, contDesafio, contInfo, contReto, contTexto, contenedorbanner, textreto } from './Foro.module.scss'

import fotoGrandeReto from "./../assets/fotoTortuga.png";
import fotoPerfil from './../assets/fotoPerfil.png';
import iconoReto from './../assets/iconoForoInner.png';
import { useParams } from "react-router-dom";

export const InnerForo = () => {
    const { id } = useParams();
    const url = `/challenges/${id}`;
    const [itemData, setItemData] = useState([]);
  
    useEffect(() => {
      getWithFetch();
    }, []);
  
    const getWithFetch = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setItemData(jsonData[0]);
    };

    console.log(itemData)

return (
<>
    <div className={contDesafio}>
        <img src={iconoReto}/>
        <h2>{itemData.challenge}</h2>
        <p className={textreto}>{itemData.description}</p>
        <p>este reto fue propuesto el dia {itemData.createdAt}</p>
        <div className={contReto}>
            <h4>_nuestro reto</h4>
            <p>les invitamos a pensar en ideas innovadoras para reutilizar/reciclar el plástico que se rescata de la playa, bucando evitar que vuelva al mar. 
                Y así encontrar nuevas alternativas sustentables a una
                problematica latente en las playas del país.</p>
            <img  src={fotoGrandeReto}/>
        </div>
    </div>
    <section class={bannerInner}>
        <div className={contenedorbanner}>
            <div className={contInfo}>
                <img src={fotoPerfil} />
                <p>_camila galo</p>
                <p>25-10-2021</p>
            </div>
            <div className={contTexto}>
                <p>colocaría cestos de residuos en la playa, uno de cartón y papel, otro vidrio y plásticos y otro de
                    desechos organicos. Y por otra parte, con los
                    desechos organicos armaría  un compost, para así generar tierra.</p>
                <div className={contBotones}>
                    <button className={btnComentar}><i class="fas fa-comments"></i>comentar</button>
                    <button className="btnContacto">contactar al ciudadano</button>
                    <button className="btnVerMas">ver más</button>
                </div>
            </div>
        </div>
    </section>
</>
)
}