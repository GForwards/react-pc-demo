import React from 'react'
import { connect } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { Layout, Menu, Row, Col, Button } from 'antd'
import * as UserActionCreator from '@/store/actions/user'

const { Header } = Layout

const HeaderComponent = (props) => {
  const { isLogin, logout } = props
  const location = useLocation()
  return (
    <Header>
      <Row justify='space-between'>
        <Col>
          <Menu
            theme='dark'
            mode='horizontal'
            defaultSelectedKeys={[location.pathname]}
            selectedKeys={[location.pathname]}
          >
            <Menu.Item key='/'>
              {location.pathname}
              <Link to='/'>首页 </Link>
            </Menu.Item>
            <Menu.Item key='/test'>
              <Link to='/test'>测试</Link>
            </Menu.Item>
            <Menu.Item key='/test1'>
              <Link to='/test1'>测试1</Link>
            </Menu.Item>
          </Menu>
        </Col>
        <Col>
          {isLogin ? <span className='login-status'>登录才会显示</span> : ''}
          {isLogin ? <Button onClick={logout}>退出</Button> : <Link to='/login'>请登录</Link>}
        </Col>
      </Row>
    </Header>
  )
}

const mapStateToProps = ({ user }) => ({
  isLogin: user.isLogin,
})

export default connect(mapStateToProps, UserActionCreator)(HeaderComponent)
