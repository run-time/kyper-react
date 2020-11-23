import PropTypes from 'prop-types'
import React from 'react'

export const ActionTypes = {
  POP_FOCUS: 'stacks/pop_focus',
  PUSH_FOCUS: 'stacks/push_focus',
}

export const FocusTrapContext = React.createContext([])

const propTypes = {
  children: PropTypes.element.isRequired,
  onEnd: PropTypes.func,
  onStart: PropTypes.func,
}

const defaultProps = {
  onEnd: () => {},
  onStart: () => {},
}

// This was intially implemented with a functional component with the useReducer approach.
// Unfortunately you can't dispatch actions from the cleanup function of a hook. This means
// we couldn't properly remove the event listener.
export class FocusTrapProvider extends React.Component {
  // Prop parser does not like static properties

  constructor(props) {
    super(props)

    this.state = {
      focusStack: [],
    }

    // The Prop parser does not like fat arrow bound methods.
    this._handleMessage = this._handleMessage.bind(this)
  }

  componentDidMount() {
    window.addEventListener('kyper-focus', this._handleMessage)
  }

  componentDidUpdate(_, prevState) {
    const previousCount = prevState.focusStack.length
    const currentCount = this.state.focusStack.length

    if (!previousCount && currentCount) {
      this.props.onStart()
    } else if (!currentCount && previousCount) {
      this.props.onEnd()
    }
  }

  componentWillUnmount() {
    window.removeEventListener('kyper-focus', this._handleMessage)
  }

  _handleMessage({ detail }) {
    if (detail.action === ActionTypes.PUSH_FOCUS) {
      this.setState(state => ({
        focusStack: [...state.focusStack, detail.payload],
      }))
    } else if (detail.action === ActionTypes.POP_FOCUS) {
      this.setState(state => ({
        focusStack: state.focusStack.slice(0, -1),
      }))
    }
  }

  render() {
    return (
      <FocusTrapContext.Provider value={this.state.focusStack}>
        {this.props.children}
      </FocusTrapContext.Provider>
    )
  }
}

FocusTrapProvider.propTypes = propTypes
FocusTrapProvider.defaultProps = defaultProps
