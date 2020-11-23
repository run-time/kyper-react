import React from 'react'
import { mount } from 'enzyme'
import { Tag, VARIANTS, SIZES } from '../lib/index'

describe('@kyper/tag', () => {
  let wrapper

  it('should render title, default size prop and classes', () => {
    wrapper = mount(<Tag size="medium" title="Foobar" />)
    expect(wrapper.html()).toContain('Foobar')
    expect(wrapper.html()).toContain('span')
    expect(wrapper.html()).toContain('Tiny')
    expect(wrapper.html()).toContain('bold')
    expect(wrapper.html()).toContain('neutral')
    expect(wrapper.html()).toContain('uppercase')
    expect(wrapper.html()).toContain('kyper-tag-title')
    expect(wrapper.html()).toContain('medium')
    expect(wrapper.prop('size')).toEqual(SIZES.MEDIUM)
  })

  it('should use VARIANTS.ERROR', () => {
    wrapper = mount(<Tag title="Error tag" variant="error" />)
    expect(wrapper.prop('variant')).toEqual(VARIANTS.ERROR)
    expect(wrapper.html()).toContain('error')
  })

  it('should use VARIANTS.PRIMARY', () => {
    wrapper = mount(<Tag title="Primary tag" variant="primary" />)
    expect(wrapper.prop('variant')).toEqual(VARIANTS.PRIMARY)
    expect(wrapper.html()).toContain('primary')
  })

  it('should use VARIANTS.SUCCESS', () => {
    wrapper = mount(<Tag title="Success tag" variant="success" />)
    expect(wrapper.prop('variant')).toEqual(VARIANTS.SUCCESS)
    expect(wrapper.html()).toContain('success')
  })

  it('should use VARIANTS.WARNING', () => {
    wrapper = mount(<Tag title="Error tag" variant="warning" />)
    expect(wrapper.prop('variant')).toEqual(VARIANTS.WARNING)
    expect(wrapper.html()).toContain('warning')
  })

  it('should use SIZES.SMALL', () => {
    wrapper = mount(<Tag size="small" title="Small tag" />)
    expect(wrapper.prop('size')).toEqual(SIZES.SMALL)
    expect(wrapper.html()).toContain('small')
  })

  it('should not clobber component class names', () => {
    wrapper = mount(<Tag className="extra" title="with custom classes" />)
    expect(wrapper.html()).toContain('medium')
    expect(wrapper.html()).toContain('neutral')
    expect(wrapper.html()).toContain('extra')
  })
})
