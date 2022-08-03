import { Api } from './hulk-buster/Api'

const api = new Api({ baseURL: import.meta.env.VITE_HULK_BUSTER_API_URL })

const token = '233333'

api.instance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    }
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  },
)

api.instance.interceptors.response.use((response) => {
  // if (response.data.errType === ResponseErrorType.TOKEN_EXPIRED) {
  //   // console.log('重新登录');
  //   userEvent.emit('logout')
  // }

  return response
})

export default api
