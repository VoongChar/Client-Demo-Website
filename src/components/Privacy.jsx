import React from 'react'
import { Card } from 'react-bootstrap'

export default function Privacy() {
  return (
    <Card border="dark" className="m-5">
      <Card.Title className="ps-3 pt-3">Privacy Policy</Card.Title>
      <Card.Body>
        We collect personal information from you, including information about
        your:
        <ul>
          <li>name</li>
          <li>contact information</li>
          <li>interactions with us</li>
          <li>billing or purchase information</li>
        </ul>
        We collect your personal information in order to:
        <ul>
          <li>contact you in response to your queries</li>
          <li>to process your payment</li>
        </ul>
        Besides our staff, we share this information with:
        <ul>
          <li>
            payment providers in order to process the payment on behalf of us
          </li>
        </ul>
        Providing some information is optional. If you choose not to enter
        contact information, billing information, we'll be unable to respond to
        your queries and, or process your order.
      </Card.Body>
      <Card.Body className="pt-0">
        You have the right to ask for a copy of any personal information we hold
        about you, and to ask for it to be corrected if you think it is wrong.
        If you’d like to ask for a copy of your information, or to have it
        corrected, please contact us at{' '}
        <span className="fw-bold">jadekingfisher@hotmail.com</span>
      </Card.Body>
    </Card>
  )
}
