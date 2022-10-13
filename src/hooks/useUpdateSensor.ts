import { request } from '../utils/axios-util'
import { useMutation } from 'react-query'

const updateSensor = (sensorData: any) => {
  return request({ url: '/sensor', method: 'put', data: sensorData })
}

export const useUpdateSensor = (id: string | undefined) => {
  return useMutation((sensorData: any) => {
    return request({ url: `/sensor/${id}`, method: 'put', data: sensorData })
  })
}
