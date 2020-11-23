import React from 'react'
import { mount } from 'enzyme'
import { Text, TEXT_STYLE, TEXT_COLOR, TAG } from '../lib/index'

describe('@kyper/text', () => {
  let wrapper

  it('should render children with default props', () => {
    wrapper = mount(
      <Text color="primary" tag="span">
        Foobar
      </Text>,
    )
    expect(wrapper.html()).toContain('Foobar')
    expect(wrapper.html()).toContain('span')
    expect(wrapper.html()).toContain('primary')
  })

  it('should use TEXT_STYLE.H1', () => {
    wrapper = mount(<Text as="H1">H1</Text>)
    expect(wrapper.prop('as')).toEqual(TEXT_STYLE.H1)
    expect(wrapper.html()).toContain('H1')
  })

  it('should use TEXT_STYLE.H2', () => {
    wrapper = mount(<Text as="H2">H2</Text>)
    expect(wrapper.prop('as')).toEqual(TEXT_STYLE.H2)
    expect(wrapper.html()).toContain('H2')
  })

  it('should use TEXT_STYLE.H3', () => {
    wrapper = mount(<Text as="H3">H3</Text>)
    expect(wrapper.prop('as')).toEqual(TEXT_STYLE.H3)
    expect(wrapper.html()).toContain('H3')
  })

  it('should use TEXT_STYLE.PARAGRAPH', () => {
    wrapper = mount(<Text as="Paragraph">Paragraph</Text>)
    expect(wrapper.prop('as')).toEqual(TEXT_STYLE.PARAGRAPH)
    expect(wrapper.html()).toContain('Paragraph')
  })

  it('should use TEXT_STYLE.BODY', () => {
    wrapper = mount(<Text as="Body">Body</Text>)
    expect(wrapper.prop('as')).toEqual(TEXT_STYLE.BODY)
    expect(wrapper.html()).toContain('Body')
  })

  it('should use TEXT_STYLE.PARAGRAPH_SMALL', () => {
    wrapper = mount(<Text as="ParagraphSmall">ParagraphSmall</Text>)
    expect(wrapper.prop('as')).toEqual(TEXT_STYLE.PARAGRAPH_SMALL)
    expect(wrapper.html()).toContain('ParagraphSmall')
  })

  it('should use TEXT_STYLE.SMALL', () => {
    wrapper = mount(<Text as="Small">Small</Text>)
    expect(wrapper.prop('as')).toEqual(TEXT_STYLE.SMALL)
    expect(wrapper.html()).toContain('Small')
  })

  it('should use TEXT_STYLE.TINY', () => {
    wrapper = mount(<Text as="Tiny">Tiny</Text>)
    expect(wrapper.prop('as')).toEqual(TEXT_STYLE.TINY)
    expect(wrapper.html()).toContain('Tiny')
  })

  it('should use TEXT_COLOR.PRIMARY', () => {
    wrapper = mount(<Text color="primary">Primary color(this is the default)</Text>)
    expect(wrapper.prop('color')).toEqual(TEXT_COLOR.PRIMARY)
    expect(wrapper.html()).toContain('primary')
  })

  it('should use TEXT_COLOR.SECONDARY', () => {
    wrapper = mount(<Text color="secondary">Secondary color</Text>)
    expect(wrapper.prop('color')).toEqual(TEXT_COLOR.SECONDARY)
    expect(wrapper.html()).toContain('secondary')
  })

  it('should use TEXT_COLOR.ERROR', () => {
    wrapper = mount(<Text color="error">Error color</Text>)
    expect(wrapper.prop('color')).toEqual(TEXT_COLOR.ERROR)
    expect(wrapper.html()).toContain('error')
  })

  it('should render element TAG.H1', () => {
    wrapper = mount(<Text tag="h1">H1 tag</Text>)
    expect(wrapper.prop('tag')).toEqual(TAG.H1)
    expect(wrapper.html()).toContain('</h1>')
  })

  it('should render element TAG.H2', () => {
    wrapper = mount(<Text tag="h2">H2 tag</Text>)
    expect(wrapper.prop('tag')).toEqual(TAG.H2)
    expect(wrapper.html()).toContain('</h2>')
  })

  it('should render element TAG.H3', () => {
    wrapper = mount(<Text tag="h3">H3 tag</Text>)
    expect(wrapper.prop('tag')).toEqual(TAG.H3)
    expect(wrapper.html()).toContain('</h3>')
  })

  it('should render element TAG.P', () => {
    wrapper = mount(<Text tag="p">Paragraph tag</Text>)
    expect(wrapper.prop('tag')).toEqual(TAG.P)
    expect(wrapper.html()).toContain('</p>')
  })

  it('should render element TAG.SPAN', () => {
    wrapper = mount(<Text tag="span">Span tag</Text>)
    expect(wrapper.prop('tag')).toEqual(TAG.SPAN)
    expect(wrapper.html()).toContain('</span>')
  })

  it('should render element TAG.STRONG', () => {
    wrapper = mount(<Text tag="strong">Strong tag</Text>)
    expect(wrapper.prop('tag')).toEqual(TAG.STRONG)
    expect(wrapper.html()).toContain('</strong>')
  })

  it('should render add uppercase class', () => {
    wrapper = mount(
      <Text tag="span" uppercase={true}>
        Uppercase element
      </Text>,
    )
    expect(wrapper.prop('uppercase')).toEqual(true)
    expect(wrapper.html()).toContain('uppercase')
  })

  it('should render add bold class', () => {
    wrapper = mount(
      <Text bold={true} tag="span">
        Uppercase element
      </Text>,
    )
    expect(wrapper.prop('bold')).toEqual(true)
    expect(wrapper.html()).toContain('bold')
  })

  it('should be able to pass through styles', () => {
    wrapper = mount(<Text style={{ fontWeight: 'bold' }}>Custom Style</Text>)

    expect(wrapper.html()).toContain('bold')
  })

  it('should not clobber component class names', () => {
    wrapper = mount(<Text className="extra">With custom class</Text>)

    expect(wrapper.html()).toContain('Paragraph')
    expect(wrapper.html()).toContain('primary')
    expect(wrapper.html()).toContain('extra')
  })
})
