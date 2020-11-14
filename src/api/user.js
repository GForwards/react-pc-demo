/* 用户相关 */
import request from '@/service/request'

/**
 * @export
 * @param {*}
 * @returns
 */
export function test() {
  return request({
    url: '../service/test.json',
    method: 'get',
  })
}
