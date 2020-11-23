import PropTypes from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'
import * as ExternalFocusTrap from 'focus-trap-react'

import { ActionTypes, FocusTrapContext } from './FocusTrapProvider'

const propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * The element ID you would like React to Portal your content to. https://reactjs.org/docs/portals.html
   */
  portalTo: PropTypes.string,
}

export class FocusTrap extends React.Component {
  componentDidMount() {
    const state = this.context
    const id = state.length + 1

    window.dispatchEvent(
      new CustomEvent('kyper-focus', {
        detail: { action: ActionTypes.PUSH_FOCUS, payload: id },
      }),
    )
  }

  componentWillUnmount() {
    window.dispatchEvent(
      new CustomEvent('kyper-focus', {
        detail: { action: ActionTypes.POP_FOCUS },
      }),
    )
  }

  // Doc prop generator doesn't work with static items
  static contextType = FocusTrapContext

  render() {
    const { children, portalTo, ...rest } = this.props
    const portal = document.querySelector(portalTo)

    if (portal) {
      return ReactDOM.createPortal(
        <ExternalFocusTrap {...rest}>{children}</ExternalFocusTrap>,
        portal,
      )
    }

    return <ExternalFocusTrap {...rest}>{children}</ExternalFocusTrap>
  }
}

FocusTrap.propTypes = propTypes
