import React, { useState } from 'react'
import { Card, Table, Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { QueryClient } from 'react-query'
import { useSensorListData } from '../hooks/useSensorListData'
import { useSensorStats } from '../hooks/useSensorStats'
import { ISensor } from '../Interfaces/ISensor'
import Sensor from './Sensor'

interface IProps {
  sensorList: {
    device_id: 'string'
    last_online: 'string'
    last_temp: number
    customer: 'string'
    location: 'string'
    overview: {
      total_messages: number
      down_time: number
      alerts: number
    }
  }[]
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}
const SensorList: React.FC = () => {
  const [page, setPage] = useState(1)
  const { data: sensorList, isLoading } = useSensorListData(page)

  return (
    <Container>
      <b>SENSOR LIST</b>
      <Link to='/add-sensor'>
        {' '}
        <Button variant='secondary' style={{ margin: '1rem' }}>
          {' '}
          Add Sensor
        </Button>
      </Link>
      <Card>
        <Table>
          <tbody>
            {sensorList?.data.results.map((sensor: ISensor) => {
              return (
                <tr key={sensor.device_id}>
                  <td>{sensor.device_id}</td>
                  <td>
                    {new Date(parseInt(sensor.last_online)).toLocaleDateString() ||
                      new Date().toLocaleDateString()}
                  </td>
                  <td>{sensor.last_temp}</td>
                  <td>{sensor.location}</td>
                  <td>
                    <Link to={`/edit-sensor/${sensor.device_id}`}>
                      <Button variant='secondary'>Edit</Button>
                    </Link>
                    <Link to={`/sensor/${sensor.device_id}`}>
                      <Button variant='secondary' style={{ marginLeft: '2rem' }}>
                        Details
                      </Button>
                    </Link>
                  </td>
                </tr>
                // <div key={sensor.device_id}>
                //   <Sensor sensor={sensor} />
                // </div>
              )
            })}
          </tbody>
        </Table>
      </Card>
      <button onClick={() => setPage((page) => page - 1)} disabled={page === 1}>
        Prev Page
      </button>
      <span style={{ margin: '1rem' }}>{page}</span>
      <button
        onClick={() => setPage((page) => page + 1)}
        disabled={page === sensorList?.data.paging.pages.length}
      >
        Next Page
      </button>
    </Container>
  )
}

export default SensorList
