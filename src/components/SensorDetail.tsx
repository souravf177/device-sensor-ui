import React from 'react'
import { Spinner, Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useSensorDetail } from '../hooks/useSensorDetail'
import Activity from './Activity'
import CardComponent from './common/CardComponent'
import DailyTemperatureChart from './DailyTemperatureChart'
import SystemLog from './SystemLog'
import WeeklyTemperatureChart from './WeeklyTemperatureChart'

const SensorDetail = () => {
  const { id = '' } = useParams()
  const { data: sensorDetails, isLoading } = useSensorDetail(id)

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
    <Container>
      <p style={{ textAlign: 'center' }}>
        Sensor - <b>{id}</b>
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '2rem 0' }}>
        <div>
          <CardComponent
            topText='TOTAL MESSAGES'
            bottomText='Total messages this week'
            sideText={sensorDetails?.data.result.overview.total_messages}
          />
          <CardComponent
            topText='DOWN TIME'
            bottomText='Total down time'
            sideText={sensorDetails?.data.result.overview.down_time}
          />
          <CardComponent
            topText='ALERTS'
            bottomText='System alerts this week'
            sideText={sensorDetails?.data.result.overview.alerts}
          />
        </div>
        <WeeklyTemperatureChart />
      </div>

      <DailyTemperatureChart />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
        <SystemLog />
        <Activity />
      </div>
    </Container>
  )
}

export default SensorDetail
