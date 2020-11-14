import React from 'react'
import { connect } from 'react-redux'
import { Link, Switch, Route } from 'react-router-dom'
// import Header from '@/components/Header'
import { Layout, Affix, Menu, Row, Col, Button } from 'antd'
import * as UserActionCreator from '@/store/actions/user'
import Test from '@/pages/test'
import Test1 from '@/pages/test1'

import '@/style/home/home.scss'

const { Header, Footer, Content } = Layout

const Home = (props) => {
  const { isLogin, login, logout } = props

  const loginClick = isLogin ? logout : login

  return (
    <>
      <Layout>
        <Affix>
          <Header>
            <Row justify='space-between'>
              <Col>
                <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
                  <Menu.Item key='1'>
                    <Link to='/'>首页</Link>
                  </Menu.Item>
                  <Menu.Item key='2'>
                    <Link to='/test'>测试</Link>
                  </Menu.Item>
                  <Menu.Item key='3'>
                    <Link to='/test1'>测试1</Link>
                  </Menu.Item>
                </Menu>
              </Col>
              <Col>
                {isLogin ? <span className='login-status'>登录才会显示</span> : ''}

                <Button onClick={loginClick}>{isLogin ? '退出' : '登录'}</Button>
              </Col>
            </Row>
          </Header>
        </Affix>

        <Content>
          <Switch>
            <Route path='/test' component={Test} />
            <Route path='/test1' component={Test1} />
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </>
  )
}

const mapStateToProps = ({ user }) => ({
  isLogin: user.isLogin,
})

export default connect(mapStateToProps, UserActionCreator)(Home)
// import Home from './pages/home'
// import Login from './pages/login'
// import Page404 from './pages/404'
