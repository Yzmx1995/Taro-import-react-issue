import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import imgSrc from '../../ad-booking__btn.png';
import Test from '../../components/test/test'
import data from '../../enums/test/test';

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!{data}</Text>
        <Test></Test>
      </View>
    )
  }
}
