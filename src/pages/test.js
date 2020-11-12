import React from 'react'
import { connect } from 'react-redux'
import * as CounterActionCreator from '@/store/actions/counter'

const Test = ({ num }) => (
  <div>
    测试的页面
    {num}
    {/* <div onClick={this.add()}>点击</div> */}
  </div>
)

const mapStateToProps = ({ counter }) => ({
  num: counter.num,
})

export default connect(mapStateToProps, CounterActionCreator)(Test)
