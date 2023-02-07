import React from 'react'
import AboutContent from './AboutContent'
import NewsPost from '../NewsPost'
import icon from './Artwork/icon.png'
import { Card } from 'react-bootstrap'
import FeaturedLatest from './FeaturedLatest'

function Home() {
  return (
    <div className="home">
      <div className="container row p-0 mx-5">
        <div className="container col-6 m-0 my-5">
          <Card border="light" className=" p-3">
          <h1 className="p-3"> About JadeKingfisher </h1>
            <div className="container-sm">
            <img
              className="img-fluid pb-3"
              src={icon}
              alt="self-portait of JadeKingfisher"
            />
            </div>
            <AboutContent />
          </Card>
        </div>
        <div className="container col-6 m-0 mt-5">
          <Card border="light">
            <h1 className="p-4"> News </h1>
            <div className="p-2">
              <NewsPost />
            </div>
            <div className="p-2">
            <NewsPost />
            </div>
            <div className="p-2">
            <NewsPost />
            </div>
          </Card>
        </div>
      </div>
      <div className="container mx-5 mb-5">
        <Card border="light" className=" p-3">
        <h1 className="p-4"> Latest Work </h1>
          <FeaturedLatest />
        </Card>
      </div>
    </div>
  )
}

export default Home
