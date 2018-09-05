import axios from '@/libs/api.request'

export const getTableData = () => {
  return axios.request({
    url: 'get_table_data',
    method: 'get'
  })
}

export const getDragList = () => {
  return axios.request({
    url: 'get_drag_list',
    method: 'get'
  })
}

export const Myworks = () => {
  console.log('heihei')
  var res = axios.request({
    url: 'api/test/',
    method: 'get'
  })
  console.log(res)
  return res
}
