import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/kdt-vue-admin-template/table/list',
    method: 'get',
    params
  })
}
