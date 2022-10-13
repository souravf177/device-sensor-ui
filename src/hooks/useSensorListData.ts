import { useQuery } from 'react-query'
import { request } from '../utils/axios-util'

const fetchSensorList = ({ queryKey }: { queryKey: any[] }) => {
  const page = queryKey[1]
  console.log(page)
  return request({ url: `/sensor?${page}` })
}

export const useSensorListData = (page = 1) => {
  return useQuery(['sensor-list', page], fetchSensorList)
}
