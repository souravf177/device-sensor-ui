import React from 'react'
import { ISensor } from '../Interfaces/ISensor'
import './Sensor.css'

interface IProps {
  sensor: ISensor
}

const Sensor: React.FC<IProps> = ({ sensor }) => {
  return (
    <table>
      <tr className='sensor-container'>
        <td>{sensor.device_id}</td>
        <td>{sensor.last_online}</td>
        <td>{sensor.last_temp}</td>
        <td>{sensor.location}</td>
        <td>{sensor.device_id}</td>
      </tr>
    </table>
  )
}

export default Sensor
