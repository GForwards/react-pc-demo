import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'

import * as UserActionCreator from '@/store/actions/user'

const Login = ({ login }) => {
  return (
    <div className='login'>
      <Button onClick={login}>登录</Button>
    </div>
  )
}
const mapStateToProps = ({ user }) => ({
  isLogin: user.isLogin,
})
export default connect(mapStateToProps, UserActionCreator)(Login)
