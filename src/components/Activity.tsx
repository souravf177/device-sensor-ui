import React from 'react'
import { Card, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { FaRegUserCircle } from 'react-icons/fa'
import { useSensorEvent } from '../hooks/useSensorEventData'
import { IEvent } from '../Interfaces/IEventData'

const Activity = () => {
  const { id = '' } = useParams()
  const { data: sensorEventData, isLoading } = useSensorEvent(id)

  if (isLoading) {
    return (
      <Spinner
        animation='border'
        variant='secondary'
        style={{ display: 'block', margin: 'auto' }}
      />
    )
  }
  return (
    <>
      <Card body style={{ width: '40vw' }}>
        <Card.Title>Activity</Card.Title>
        {sensorEventData?.data.results.map((data: IEvent, index: number) => {
          return (
            <Card.Body key={index}>
              {' '}
              <div>
                <FaRegUserCircle />
                <div>
                  <div>{data.event_name}</div>
                  <div>{new Date(parseInt(data.time)).getHours().toString()} hours ago</div>
                </div>
              </div>
              <div>{data.description}</div>
            </Card.Body>
          )
        })}
      </Card>
    </>
  )
}

export default Activity
