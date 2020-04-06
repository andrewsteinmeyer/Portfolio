
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import './Card.css'

const Card = props => (
    <div className="Card animated fade-in-up">
        <img src={props.image} alt="project" />
        <h3>{props.title}</h3>
        <figcaption>
            <h1 className="caption-title">{props.caption}</h1>
            <a className="button is-outlined" href={props.link} target="_blank" rel="noopener noreferrer">
                <span>Visit Project</span>
                <span className="link-icon"><FontAwesomeIcon icon={faAngleRight} /></span>
            </a>
        </figcaption>
        <p>{props.text}</p>
        <div className="overlay"></div>
    </div>
)

export default Card