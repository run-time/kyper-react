import React from 'react'
import { mount } from 'enzyme'
import { Avatar } from '../lib/index'

describe('@kyper/button', () => {
  it('should render Avatar at size 16', () => {
    const wrapper = mount(<Avatar size={16}>YO</Avatar>)

    expect(wrapper.find('.avatar-16').exists()).toEqual(true)
  })
})
