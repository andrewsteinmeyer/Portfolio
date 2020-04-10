
import React from 'react'

import './ExternalLink.css'

const ExternalLink = props => (
    <a className="Link" href={props.link} target="_blank" rel="noopener noreferrer">{props.text}</a>
)

export default ExternalLink