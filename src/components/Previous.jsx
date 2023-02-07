import React from 'react'
import { Card } from 'react-bootstrap'
import Strapi from '../strapi'

export default function previous() {
  return (
    <div className="container-fluid my-5">
      <Card border="light" className="p-3">
        <Card.Title>Previous Work</Card.Title>
        <div className="row">
          <div className="col-4">
            <Strapi />
          </div>
          <div className="col-4">
            <Strapi />
          </div>
          <div className="col-4">
            <Strapi />
          </div>
        </div>
      </Card>
    </div>
  )
}
