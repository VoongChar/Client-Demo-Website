import React from 'react'
import CommissionInfo from './CommissionInfo'
import { Card } from 'react-bootstrap'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <div className="container py-5">
      <h1 className="font-weight-light pb-2">Contact JadeKingfisher</h1>
      <Card border="light">
        <div className="row">
          <div className="col-6">
            <CommissionInfo />
          </div>
          <div className="col-6">
            <ContactForm />
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Contact
