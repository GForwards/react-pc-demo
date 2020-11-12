import React from 'react'
import { connect } from 'react-redux'
import * as CounterActionCreator from '@/store/actions/counter'

const Test = ({ num, add, minus }) => (
  <div>
    测试的页面
    {num}
    <button
      type='button'
      className='foo'
      onClick={() => {
        add()
      }}
    >
      加
    </button>
    <button
      type='button'
      className='foo'
      onClick={() => {
        minus()
      }}
    >
      jian-
    </button>
  </div>
)

const mapStateToProps = ({ counter }) => ({
  num: counter.num,
})

export default connect(mapStateToProps, CounterActionCreator)(Test)
