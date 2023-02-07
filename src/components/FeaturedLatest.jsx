import React from 'react'
import { Card } from 'react-bootstrap'
import girlInRed from './Artwork/GirlinRed.png'
import frogGirl from './Artwork/FrogGirl.png'
import birthdayDog from './Artwork/BirthdayDog.png'


export default function FeaturedLatest() {
  return (
    <div className="row">
      <div className="col-4">
        <Card border="light" className=" p-3">
          {/* Art Title */}
          <Card.Title className="text-center">Girl in Red</Card.Title>
          {/* Artwork */}
          <img
            src={girlInRed}
            className="img-fluid"
            alt="Jadekingfisher Artwork"
          ></img>
          {/* Art Description */}
          <Card.Body className="text-center">
            Inspired by my favourite colour.
          </Card.Body>
        </Card>
      </div>
      <div className="col-4">
        <Card border="light" className=" p-3">
          {/* Art Title */}
          <Card.Title className="text-center">Frog Girl</Card.Title>
          {/* Artwork */}
          <img
            src={frogGirl}
            className="img-fluid"
            alt="Jadekingfisher Artwork"
          ></img>
          {/* Art Description */}
          <Card.Body className="text-center">
            Just your neighbourhood amphibian chilling.{' '}
          </Card.Body>
        </Card>
      </div>
      <div className="col-4">
        <Card border="light" className=" p-3">
          {/* Art Title */}
          <Card.Title className="text-center">Birthday Art</Card.Title>
          {/* Artwork */}
          <img
            src={birthdayDog}
            className="img-fluid"
            alt="Jadekingfisher Artwork"
          ></img>
          {/* Art Description */}
          <Card.Body className="text-center">
            Birthday Art Style Options
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}
