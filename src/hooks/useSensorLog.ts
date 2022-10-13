import { request } from './../utils/axios-util'
import { useQuery } from 'react-query'

const fetchSensorLogs = ({ queryKey }: { queryKey: any[] }) => {
  const id = queryKey[1]
  return request({ url: `/sensor/${id}/logs` })
}

export const useSensorLogs = (id: string | null) => {
  return useQuery(['sensor-logs', id], fetchSensorLogs)
}
