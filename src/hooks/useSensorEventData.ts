import { request } from './../utils/axios-util'
import { useQuery } from 'react-query'

const fetchSensorEventData = ({ queryKey }: { queryKey: any[] }) => {
  const id = queryKey[1]
  return request({ url: `/sensor/${id}/events` })
}

export const useSensorEvent = (id: string | null) => {
  return useQuery(['sensor-event', id], fetchSensorEventData)
}
