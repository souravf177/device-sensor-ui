import axios from 'axios'

const client = axios.create({ baseURL: 'http://localhost:3009' })

export const request = ({ ...options }) => {
  // eslint-disable-next-line quotes
  client.defaults.headers.common.Authorization = `Bearer token`

  //   const onSuccess = (response: any) => response
  //   const onError = (error: any) => {
  //     return error
  //   }

  return client(options)
}
