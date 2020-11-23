import React from 'react'
import { mount } from 'enzyme'
import { InstitutionLogo } from '../lib/index'

describe('@kyper/institutionlogo', () => {
  let wrapper

  it('renders an image with alt text', () => {
    wrapper = mount(<InstitutionLogo />)

    expect(wrapper.html()).toContain('<img alt="Institution logo image"')
  })

  it('sets the alt text if provided', () => {
    wrapper = mount(<InstitutionLogo alt="My Alt Text" />)

    expect(wrapper.find('img').prop('alt')).toContain('My Alt Text')
  })

  it('should set height and width based upon the size prop', () => {
    wrapper = mount(<InstitutionLogo size={50} />)

    expect(wrapper.find('img').prop('height')).toEqual(50)
    expect(wrapper.find('img').prop('width')).toEqual(50)
  })

  it('should allow custom style', () => {
    wrapper = mount(<InstitutionLogo style={{ border: '1px solid red' }} />)

    expect(wrapper.find('img').prop('style')).toEqual({ borderRadius: 2, border: '1px solid red' })
  })

  it('should be able to pass through other props', () => {
    wrapper = mount(<InstitutionLogo data-attribute="my-attribute" />)

    expect(wrapper.find('img').prop('data-attribute')).toEqual('my-attribute')
  })

  it('should over write props with passed through props', () => {
    wrapper = mount(<InstitutionLogo institutionGuid="INS-GUID" src="http://mycustom.url" />)

    expect(wrapper.find('img').prop('src')).toEqual('http://mycustom.url')
  })

  it('should use the fall back URL default on error', () => {
    wrapper = mount(<InstitutionLogo src="http://bad/url" />)

    const image = wrapper.find('img')
    const mockEvent = { target: { src: '' } }

    image.prop('onError')(mockEvent)

    expect(mockEvent.target.src).toEqual(
      'http://content.moneydesktop.com/storage/MD_Assets/serenity/default_institution_logo.png',
    )
  })
})
