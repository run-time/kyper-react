import React from 'react'
import { mount } from 'enzyme'
import { TokenProvider, useTokens } from '../lib/index'

const Child = () => {
  const tokens = useTokens()

  return (
    <div
      style={{
        background: tokens.BackgroundColor.ButtonPrimary,
        color: tokens.TextColor.Default,
        fontFamily: tokens.Font.Regular,
      }}
    />
  )
}

describe('@kyper/tokenprovider', () => {
  let wrapper

  it('should render children', () => {
    wrapper = mount(<TokenProvider>foo</TokenProvider>)

    expect(wrapper.html()).toContain('foo')
  })

  it('should provide token context for children components', () => {
    wrapper = mount(
      <TokenProvider>
        <Child />
      </TokenProvider>,
    )

    expect(wrapper.html()).toContain('rgb(47, 115, 218)')
    // Dark text
    expect(wrapper.html()).toContain('color: rgb(18, 20, 23)')
  })

  it('should support switching to a different color scheme', () => {
    wrapper = mount(
      <TokenProvider scheme="dark">
        <Child />
      </TokenProvider>,
    )

    // White text
    expect(wrapper.html()).toContain('color: rgb(255, 255, 255)')
  })

  it('should support passing custom brand colors to the mx design token library', () => {
    wrapper = mount(
      <TokenProvider brand300="rgb(1, 2, 3)">
        <Child />
      </TokenProvider>,
    )

    expect(wrapper.html()).toContain('background: rgb(1, 2, 3)')
  })

  it('should support passing custom fonts', () => {
    wrapper = mount(
      <TokenProvider regularFont="fooFont">
        <Child />
      </TokenProvider>,
    )

    expect(wrapper.html()).toContain('font-family: fooFont')
  })
})
