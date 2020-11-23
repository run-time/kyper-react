import React from 'react'
import { mount } from 'enzyme'
import { Button, ButtonGroup, buttonVariants } from '../lib/index'

describe('@kyper/button', () => {
  it('should render ButtonGroup with two buttons properly spaced', () => {
    const wrapper = mount(
      <ButtonGroup>
        <Button variant={buttonVariants.TRANSPARENT}>Cancel</Button>
        <Button variant={buttonVariants.DESTRUCTIVE}>Remove</Button>
      </ButtonGroup>,
    )

    const buttonList = wrapper.find('button')

    expect(buttonList.length).toEqual(2)
    expect(buttonList.first().prop('className')).toContain(`kyper-${buttonVariants.TRANSPARENT}`)
    expect(buttonList.last().prop('className')).toContain(`kyper-${buttonVariants.DESTRUCTIVE}`)
  })
})
