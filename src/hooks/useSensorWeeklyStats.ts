import { request } from './../utils/axios-util'
import { useQuery } from 'react-query'

const fetchWeeklyStats = ({ queryKey }: { queryKey: any[] }) => {
  const id = queryKey[1]
  return request({ url: `/sensor/${id}/stats/weekly` })
}

export const useSensorWeeklyStats = (id: string) => {
  return useQuery(['sensor-weekly-stats', id], fetchWeeklyStats)
}
