import React, { useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { useSensorListData } from '../hooks/useSensorListData'
import CardComponent from './common/CardComponent'
// import LineChart from './common/LineChart'
import SensorList from './SensorList'
import SensorStats from './SensorStats'

const Home = () => {
  const { data: sensorList, isLoading } = useSensorListData()

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
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <CardComponent topText='TOTAL SENSORS' bottomText={sensorList?.data.paging.count} />
        {/* hardcoded alerts & customer count as I am not getting it from the api */}
        <CardComponent topText='OPEN ALERTS' bottomText={2} />
        <CardComponent topText='TOTAL CUSTOMERS' bottomText={14} />
      </div>
      <SensorStats />
      <SensorList />
    </>
  )
}

export default Home
