import { btnCards, card, cardTitle } from './Card.module.scss'

import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import React from 'react'

const Card = (props) => {
    return (
        <div className={card}>
            <div className="container">
                <div className={cardTitle}>
                    <img src={props.img} alt="img icon" />
                    <div>
                        <h3>{props.title}</h3>
                    </div>
                    <div>
                    </div>
                </div>
                <p>{props.description}
                </p>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <Link to={`/innerforo/${props.id}`}><button className={btnCards} type="button">{props.boton}</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Card
