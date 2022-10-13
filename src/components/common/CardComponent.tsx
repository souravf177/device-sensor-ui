import React from 'react'
import { Card } from 'react-bootstrap'
import { FaDocker } from 'react-icons/fa'

interface IProps {
  topText: string
  bottomText: string | number
  sideText?: string | number
}

const CardComponent: React.FC<IProps> = ({ topText, bottomText, sideText }) => {
  return (
    <Card style={{ width: '18rem', height: '6rem' }}>
      <Card.Body style={{ display: 'flex' }}>
        <div style={{ width: '12rem' }}>
          <Card.Title>{topText}</Card.Title>
          <Card.Text>{bottomText}</Card.Text>
        </div>
        {sideText ? <div style={{ margin: 'auto' }}>{sideText}</div> : <FaDocker />}
      </Card.Body>
    </Card>
  )
}

export default CardComponent
