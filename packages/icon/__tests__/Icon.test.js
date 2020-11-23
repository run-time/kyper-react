import React from 'react'
import { mount } from 'enzyme'
import { Accounts } from '../lib/index'

describe('@kyper/icon', () => {
  let wrapper

  it('should render an svg element', () => {
    wrapper = mount(<Accounts />)
    expect(wrapper.find('svg')).toHaveLength(1)
  })

  it('should support custom colors', () => {
    wrapper = mount(<Accounts color="#666" />)
    expect(wrapper.html()).toContain('#666')
  })

  it('should support custom viewbox', () => {
    wrapper = mount(<Accounts viewBox="12 12 12 12" />)
    expect(wrapper.find('svg').prop('viewBox')).toEqual('12 12 12 12')
  })

  it('should execute order 66', () => {
    wrapper = mount(<Accounts size={66} />)
    expect(wrapper.find('svg').prop('height')).toEqual(66)
    expect(wrapper.find('svg').prop('width')).toEqual(66)
  })

  it('should support styles on the svg element', () => {
    wrapper = mount(<Accounts styles={{ padding: 6 }} />)
    expect(wrapper.find('svg').prop('style')).toEqual({ padding: 6 })
  })
})
