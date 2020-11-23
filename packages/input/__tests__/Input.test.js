import React from 'react'
import { mount } from 'enzyme'
import { TextInput } from '../lib/index'

describe('TextInput', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<TextInput label="This is a label" name="foo" />)
  })

  it('should render a text input element', () => {
    const input = wrapper.find('input[type="text"]')

    expect(input).toHaveLength(1)
  })

  it('should assign the name attribute as it is required', () => {
    const input = wrapper.find('input[name="foo"]')

    expect(input).toHaveLength(1)
  })

  it('should assign the id if present', () => {
    wrapper = mount(<TextInput id="bar" label="This is a label" name="foo" />)

    expect(wrapper.find('input[id="bar"]')).toHaveLength(1)
  })

  it('should assign the name attribute to the id if it is not present', () => {
    const input = wrapper.find('input[id="foo"]')

    expect(input).toHaveLength(1)
  })

  it('should render label with the appropriate text', () => {
    const label = wrapper.find('label')

    expect(label.html()).toContain('This is a label')
  })

  it('should support a custom label component and pass along some props', () => {
    wrapper = mount(<TextInput id="bar" label={<label>Custom Label</label>} name="foo" />)

    const label = wrapper.find('label')

    expect(label.html()).toContain('Custom Label')
    expect(label.html()).toContain('for="bar"')
    expect(label.html()).toContain('style="position: absolute;')
  })

  it('should include references to the aria-describedby elements based on the id', () => {
    expect(wrapper.html()).toContain('aria-describedby="foo-description foo-error')
  })

  it('should allow a custom ref on the native input', () => {
    const ref = React.createRef()

    wrapper = mount(
      <TextInput label="label" name="foo" onChange={() => {}} ref={ref} value="bar" />,
    )

    const value = wrapper.find('input[name="foo"]').getDOMNode().value

    expect(value).toEqual(ref.current.value)
  })

  it('should allow custom icons', () => {
    const FakeIcon = () => <span>FakeIcon</span>

    wrapper.setProps({
      iconLeft: <FakeIcon />,
    })

    expect(wrapper.find(FakeIcon)).toHaveLength(1)
  })

  it('should render a description', () => {
    const description = 'What a lovely description'

    wrapper.setProps({ description })
    expect(wrapper.html()).toContain(description)
  })

  it('should support an icon in the description', () => {
    wrapper.setProps({ description: 'blah', showDescriptionIcon: true })

    expect(wrapper.find('AttentionOutline')).toHaveLength(1)
  })

  it('should render an error message', () => {
    const error = 'This error sucks'

    wrapper.setProps({ error })
    expect(wrapper.html()).toContain(error)
  })

  it('should support aria-invalid and sets to true if you pass in a error message', () => {
    expect(wrapper.html()).toContain('aria-invalid="false"')

    const error = 'This error also sucks'

    wrapper.setProps({ error })
    expect(wrapper.html()).toContain('aria-invalid="true"')
  })

  it('should support an icon in the error message', () => {
    wrapper.setProps({ error: 'blah', showErrorIcon: true })

    expect(wrapper.find('CloseFilled')).toHaveLength(1)
  })

  it('should pass along props to the input, including functions', () => {
    const onChange = jest.fn()

    wrapper.setProps({ onChange })

    const input = wrapper.find('input').at(0)

    input.simulate('change', { target: { value: 'foobar' } })

    // Synthetic event
    expect(onChange).toHaveBeenCalledWith(expect.objectContaining({ target: { value: 'foobar' } }))
  })
})
