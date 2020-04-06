
import React from 'react'
import './Skill.css'

const Skill = props => (
    <div className="Skill animated fade-in-up">
        <img className="responsive-img" src={props.image} alt="skill"/>
        <p>{props.title}</p>
    </div>
)

export default Skill