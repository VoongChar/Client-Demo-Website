import React from 'react'
import AboutImg from './AboutImg'
import AboutContent from './AboutContent'
import { Card } from 'react-bootstrap'

function About() {
  return (
    <div className="container">
      <h1 className="p-3"> About JadeKingfisher </h1>
      <Card border="light" className="mb-5">
        <div className=" align-items-center m-5">
          <AboutImg />
          <AboutContent />
        </div>
      </Card>
    </div>
  )
}

export default About
