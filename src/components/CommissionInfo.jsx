import React from 'react'
import { Card } from 'react-bootstrap'

export default function CommissionInfo() {
  return (
      <div className="container mx-auto pt-3">
        <Card.Title className="text-center">Want to commission me?</Card.Title>
        <Card.Body>
            Please email{' '}
            <span className="fw-bold">jadekingfisher@hotmail.com</span> with the
            following information:
            <ul>
            <li> Description of request</li>
            <li>
                {' '}
                Style (more cartoon, more realistic, a sketch, lineart, flat colours
                or fully shaded, or painted)
            </li>
            <li>
                {' '}
                Reference images or art (This could be references for characters,
                colour schemes, or objects etc)
            </li>
            </ul>
        </Card.Body>
    </div>  
  )      
}
