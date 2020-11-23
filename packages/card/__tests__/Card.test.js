import React from 'react'
import { mount } from 'enzyme'
import { Card } from '../lib/Card'

describe('@kyper/card', () => {
  let wrapper

  it('should render children', () => {
    wrapper = mount(<Card>Foobar</Card>)
    expect(wrapper.html()).toContain('Foobar')
  })

  it('should use PADDING.SMALL', () => {
    wrapper = mount(<Card padding="small">Foobar</Card>)
    expect(wrapper.getDOMNode().style).toHaveProperty('padding', '16px')
  })

  it('should use PADDING.LARGE', () => {
    wrapper = mount(<Card padding="large">Foobar</Card>)
    expect(wrapper.getDOMNode().style).toHaveProperty('padding', '24px')
  })

  it('should use PADDING.NONE', () => {
    wrapper = mount(<Card padding="none">Foobar</Card>)
    expect(wrapper.getDOMNode().style).toHaveProperty('padding', '0px')
  })

  it('should use BORDER_RADIUS.CARD by default', () => {
    wrapper = mount(<Card>Foobar</Card>)
    expect(wrapper.getDOMNode().style).toHaveProperty('border-radius', '4px')
  })

  it('should use BORDER_RADIUS.CARD', () => {
    wrapper = mount(<Card borderRadius="card">Foobar</Card>)
    expect(wrapper.getDOMNode().style).toHaveProperty('border-radius', '4px')
  })

  it('should use BORDER_RADIUS.NONE', () => {
    wrapper = mount(<Card borderRadius="none">Foobar</Card>)
    expect(wrapper.getDOMNode().style).toHaveProperty('border-radius', '0px')
  })
})
