import { request } from '../utils/axios-util'
import { useMutation } from 'react-query'

const addSensor = (sensorData: any) => {
  return request({ url: '/sensor', method: 'post', data: sensorData })
}

export const useAddSensor = () => {
  return useMutation(addSensor)
}
