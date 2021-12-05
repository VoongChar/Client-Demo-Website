import React from 'react'
import { Accordion } from 'react-bootstrap'

export default function Userfaq() {
  return (
    <div className="container my-5">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header> Who is JadeKingfisher?</Accordion.Header>
          <Accordion.Body>
            Nichola Henderson (They/Them pronouns) known online by their art
            handle JadeKingfisher, is a local Wellington artist. Nich graduated
            from Massey University in 2020 with a Bachelor’s in Fine Arts and
            specialise in digital art and acrylic painting. They have also
            experimented with other mediums.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How Can I Contact JadeKingfisher?</Accordion.Header>
          <Accordion.Body>
            You can contact Nich by emailing Nich directly at{' '}
            <span className="fw-bold">jadekingfisher@hotmail.com</span>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How Do I Request A Commission?</Accordion.Header>
          <Accordion.Body>
            Please email Nich at{' '}
            <span className="fw-bold">jadekingfisher@hotmail.com</span> with the
            following information:
            <ul>
              <li> Description of request</li>
              <li>
                {' '}
                Style (more cartoon, more realistic, a sketch, lineart, flat
                colours or fully shaded, or painted)
              </li>
              <li>
                {' '}
                Reference images or art (This could be references for
                characters, colour schemes, or objects etc)
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Where Can I View Their Latest Work?
          </Accordion.Header>
          <Accordion.Body>
            View their Latest Work by selecting Latest work in the navigation
            bar or via their social media (
            <a href="https://twitter.com/Jadekingart">Twitter</a>,
            {' '} <a href="https://www.instagram.com/jadekingfisherart/">Instagram</a>,
            {' '} <a href="https://www.deviantart.com/jadekingfisher">DeviantArt</a>
            {' '} or
            {' '} <a href="https://www.youtube.com/c/JadeKFisher">Youtube</a>).
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            How Can I View Their Previous Work?
          </Accordion.Header>
          <Accordion.Body>
            View their previous work by selecting Previous Work in the
            Navigation bar or via their social media (
            <a href="https://twitter.com/Jadekingart">Twitter</a>,
            {' '} <a href="https://www.instagram.com/jadekingfisherart/">Instagram</a>,
            {' '} <a href="https://www.deviantart.com/jadekingfisher">DeviantArt</a>
            {' '} or
            {' '} <a href="https://www.youtube.com/c/JadeKFisher">Youtube</a>).
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            Where Can I Purchase Prints Or Merchandise?
          </Accordion.Header>
          <Accordion.Body>
            The official JadeKingfisher Shop is coming soon! Keep an eye out on
            our Shop page. Nich also sells their merch using{' '}
            <a href="https://www.redbubble.com/people/Jadekingfisher/shop">
              RedBubble.
            </a>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}
