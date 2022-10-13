import { request } from './../utils/axios-util'
import { useQuery } from 'react-query'

const fetchWeeklyAvgStats = ({ queryKey }: { queryKey: any[] }) => {
  const id = queryKey[1]
  return request({ url: `/sensor/${id}/stats/weekly_avg` })
}

export const useSensorWeeklyAvgStats = (id: string) => {
  return useQuery(['sensor-weekly-Avg-stats', id], fetchWeeklyAvgStats)
}
