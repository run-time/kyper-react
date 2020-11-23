import React from 'react'
import { mount } from 'enzyme'
import { Button, buttonVariants, buttonSizes } from '../lib/Button'

describe('@kyper/button', () => {
  let wrapper

  let defaultProps

  beforeEach(() => {
    defaultProps = {
      onClick: jest.fn(),
    }
  })

  it('should render children with default button type', () => {
    wrapper = mount(<Button>Foobar</Button>)
    expect(wrapper.html()).toContain('Foobar')
    expect(wrapper.html()).toContain('type="button"')
  })

  it('should not fire the onClick when disabled and contain aria-disabled prop', () => {
    wrapper = mount(
      <Button {...defaultProps} disabled={true}>
        Neutral Button
      </Button>,
    )

    expect(wrapper.html()).toContain('aria-disabled')
    wrapper.find(Button).simulate('click')
    expect(defaultProps.onClick).not.toHaveBeenCalled()
  })

  it('should fire onClick when clicked', () => {
    wrapper = mount(<Button {...defaultProps}>Neutral Button</Button>)

    wrapper.find(Button).simulate('click')
    expect(defaultProps.onClick).toHaveBeenCalled()
  })

  it('should have size prop', () => {
    wrapper = mount(<Button size={buttonSizes.SMALL}>Neutral Button</Button>)

    expect(wrapper.find(Button).prop('size')).toEqual(buttonSizes.SMALL)
  })

  it('should have variant prop and variant className', () => {
    wrapper = mount(<Button variant={buttonVariants.PRIMARY}>Primary Button</Button>)

    expect(wrapper.prop('variant')).toEqual(buttonVariants.PRIMARY)
    expect(wrapper.find('button').prop('className')).toContain(`kyper-${buttonVariants.PRIMARY}`)
  })

  it('should be able to pass through other props', () => {
    wrapper = mount(
      <Button aria-label="button to click" style={{ color: 'blue' }}>
        Custom Styles Button
      </Button>,
    )

    expect(wrapper.html()).toContain('blue')
    expect(wrapper.find('button').prop('aria-label')).toEqual('button to click')
  })
})
