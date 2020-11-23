import React from 'react'
import { mount } from 'enzyme'
import { PasswordInput } from '../lib/index'

describe('PasswordInput', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<PasswordInput label="This is a label" name="foo" />)
  })

  it('should render a password input element', () => {
    const input = wrapper.find('input[type="password"]')

    expect(input).toHaveLength(1)
  })

  it('should not display the toggle button by default', () => {
    expect(wrapper.find('button')).toHaveLength(0)
  })

  describe('toggling the password', () => {
    beforeEach(() => {
      wrapper.setProps({
        allowToggle: true,
      })
    })

    it('should render a button with icons', () => {
      expect(wrapper.find('button')).toHaveLength(1)
      expect(wrapper.find('EyeOff')).toHaveLength(1)
    })

    it('should toggle the field type when clicking the button', () => {
      wrapper.find('button').simulate('click')

      expect(wrapper.find('input[type="text"]')).toHaveLength(1)
      expect(wrapper.find('Eye')).toHaveLength(1)
    })

    it('should contain English aria-labels by default', () => {
      expect(wrapper.find('button').prop('aria-label')).toEqual('Show password')

      wrapper.find('button').simulate('click')

      expect(wrapper.find('button').prop('aria-label')).toEqual('Hide password')
    })

    it('should contain translated aria-labels', () => {
      const wrapper = mount(
        <PasswordInput
          allowToggle={true}
          ariaHideLabel="Masquer le mot de passe"
          ariaShowLabel="Montrer le mot de passe"
          label="This is a label"
          name="foo"
        />,
      )

      expect(wrapper.find('button').prop('aria-label')).toEqual('Montrer le mot de passe')

      wrapper.find('button').simulate('click')

      expect(wrapper.find('button').prop('aria-label')).toEqual('Masquer le mot de passe')
    })
  })

  describe('original input props', () => {
    it('should assign the name attribute as it is required', () => {
      const input = wrapper.find('input[name="foo"]')

      expect(input).toHaveLength(1)
    })

    it('should render label with the appropriate text', () => {
      const label = wrapper.find('label')

      expect(label.html()).toContain('This is a label')
    })
  })

  it('should still allow a custom ref on the native input', () => {
    const ref = React.createRef()

    wrapper = mount(
      <PasswordInput label="label" name="foo" onChange={() => {}} ref={ref} value="bar" />,
    )

    const value = wrapper.find('input[name="foo"]').getDOMNode().value

    expect(value).toEqual(ref.current.value)
  })
})
