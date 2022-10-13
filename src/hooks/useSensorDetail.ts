import { request } from '../utils/axios-util'
import { useQuery } from 'react-query'

const fetchSensorDetails = ({ queryKey }: { queryKey: any[] }) => {
  const id = queryKey[1]
  return request({ url: `/sensor/${id}` })
}

export const useSensorDetail = (id: string | null, onSuccess?: any) => {
  return useQuery(['sensor-detail', id], fetchSensorDetails, {
    onSuccess,
  })
}
