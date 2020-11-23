import React from 'react'
import { mount } from 'enzyme'

import { Tabs } from '../lib/index'

describe('Tabs component', () => {
  let buttons

  let wrapper

  let defaultProps

  beforeEach(() => {
    defaultProps = {
      onTabSelect: jest.fn(),
      selectedTabIndex: 0,
      tabs: [{ label: 'foo-label', text: 'foo' }, { text: 'bar' }],
    }
    wrapper = mount(<Tabs {...defaultProps} />)
    buttons = wrapper.find('button')
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('should render the tabs as a list of buttons', () => {
    expect(buttons).toHaveLength(2)
    expect(buttons.first().text()).toEqual('foo')
    expect(buttons.last().text()).toEqual('bar')
  })

  it('should have an aria label if the label key is truthy', () => {
    expect(buttons.first().html()).toContain('aria-label="foo-label"')
    expect(buttons.last().html()).not.toContain('aria-label')
  })

  it('should call the onTabSelect prop with the tabs index when clicking on a tab', () => {
    buttons.first().simulate('click')
    expect(defaultProps.onTabSelect).toHaveBeenCalledWith(0)

    buttons.last().simulate('click')
    expect(defaultProps.onTabSelect).toHaveBeenCalledWith(1)
  })

  it('should use the selectedTabIndex prop to apply the correct aria selected value', () => {
    expect(buttons.first().html()).toContain('aria-selected="true"')
    expect(buttons.last().html()).toContain('aria-selected="false"')

    wrapper.setProps({ selectedTabIndex: 1 })

    expect(buttons.first().html()).toContain('aria-selected="false"')
    expect(buttons.last().html()).toContain('aria-selected="true"')
  })

  it('should set the tabIndex appropriately for the selected tab', () => {
    expect(buttons.first().html()).toContain('tabindex="0"')
    expect(buttons.last().html()).toContain('tabindex="-1"')
  })

  describe('keyboard events', () => {
    it('should switch to the last tab when you arrow left on the first tab', () => {
      buttons.first().simulate('keyUp', { key: 'ArrowLeft' })

      expect(defaultProps.onTabSelect).toHaveBeenCalledWith(1)
    })

    it('should switch to the previous tab when you arrow left on not the first tab', () => {
      buttons.last().simulate('keyUp', { key: 'ArrowLeft' })

      expect(defaultProps.onTabSelect).toHaveBeenCalledWith(0)
    })

    it('should switch to the to the next tab when you arrow right on a tab with more siblings', () => {
      buttons.first().simulate('keyUp', { key: 'ArrowRight' })

      expect(defaultProps.onTabSelect).toHaveBeenCalledWith(1)
    })

    it('should switch to the first tab when you arrow right on the last tab', () => {
      buttons.last().simulate('keyUp', { key: 'ArrowRight' })

      expect(defaultProps.onTabSelect).toHaveBeenCalledWith(0)
    })
  })
})
