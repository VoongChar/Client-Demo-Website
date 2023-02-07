import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'

const Strapi = () => {
  const url = 'http://localhost:1337/api/artworks'
  const localHost = 'http://localhost:1337'

  const [artworks, setArtworks] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchArtworks = async () => {
      const response = await axios.get(url)
      setArtworks(response.data.data)
    }

    fetchArtworks().catch((err) => {
      setError(err)
    })
  }, [])

  if (error) return <div>Problem fetching - {error.message}</div>

  return (
    <div className="">
      {Object.values(artworks).map((artwork) => (
        <div className="container my-3">
          <div className="" key={artwork.id}>
            <Card border="light" className=" p-3">
              {/* Art Title */}
              <Card.Title className="text-center">
                {artwork.attributes.name}
              </Card.Title>
              {/* Artwork */}
              <img
                src={`${localHost}${artwork.attributes.src}`}
                className="img-fluid"
                alt="Jadekingfisher Artwork"
              ></img>
              {/* Art Description */}
              <Card.Body className="text-center">
                {artwork.attributes.description}
              </Card.Body>
            </Card>
          </div>

        </div>
      ))}
    </div>
  )
}

export default Strapi
