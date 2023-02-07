import React from 'react'
import { Card } from 'react-bootstrap'

export default function NewsPost() {
  return (
    <div>
      <Card border="light" className="p-3">
        <h1>Blog Post #</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
          necessitatibus blanditiis placeat, eaque minima saepe minus eveniet
          inventore iure porro laudantium adipisci cum reprehenderit ut fugit
          magnam. Quos, quae eum.
        </p>
      </Card>
    </div>
  )
}
