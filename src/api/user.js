/* 用户相关 */
import request from '@/service/request'

/**
 * @export
 * @param {*}
 * @returns
 */
export function test() {
  return request({
    url: '/list',
    method: 'get',
  })
}
