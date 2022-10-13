import { useQuery } from 'react-query'
import { request } from '../utils/axios-util'

const fetchSensorStats = () => {
  return request({ url: '/sensor/stats' })
}

export const useSensorStats = () => {
  return useQuery(['sensor-stats'], fetchSensorStats)
}
