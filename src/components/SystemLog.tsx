import React from 'react'
import { Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useSensorLogs } from '../hooks/useSensorLog'
import { ILogData } from '../Interfaces/ILogData'

const SystemLog = () => {
  const { id = '' } = useParams()
  const { data: sensorLogData } = useSensorLogs(id)
  return (
    <>
      <Card body style={{ width: '40vw' }}>
        <Card.Title>SYSTEM LOG</Card.Title>
        {sensorLogData?.data.results.map((data: ILogData, index: number) => {
          return (
            <Card.Body key={index}>
              <div>{new Date(parseInt(data.time)).getHours().toString()} hours</div>
              <div>{data.description}</div>
            </Card.Body>
          )
        })}
      </Card>
    </>
  )
}

export default SystemLog
