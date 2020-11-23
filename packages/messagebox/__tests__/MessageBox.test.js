import React from 'react'
import { mount } from 'enzyme'
import { MessageBox, VARIANTS } from '../lib/MessageBox'

describe('@kyper/messagebox', () => {
  let wrapper

  it('should render children', () => {
    wrapper = mount(<MessageBox>Foobar</MessageBox>)
    expect(wrapper.html()).toContain('Foobar')
  })

  it('should pass className', () => {
    wrapper = mount(<MessageBox className="myClass">Foobar</MessageBox>)
    expect(wrapper.html()).toContain('myClass')
  })

  it('should use VARIANTS.SUCCESS', () => {
    wrapper = mount(<MessageBox variant="success">Foobar</MessageBox>)
    expect(wrapper.prop('variant')).toEqual(VARIANTS.SUCCESS)
  })

  it('should have a title', () => {
    wrapper = mount(<MessageBox title="Title test">Foobar</MessageBox>)
    expect(wrapper.prop('title')).toEqual('Title test')
    expect(wrapper.html()).toContain('Title test')
  })

  it('should find close button when function added to onClose prop', () => {
    wrapper = mount(
      <MessageBox onClose={jest.fn()} variant="success">
        Foobar
      </MessageBox>,
    )
    expect(wrapper.html()).toContain('Close message')
  })
})
