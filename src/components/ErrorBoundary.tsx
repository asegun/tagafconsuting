import { Component, type ReactNode } from 'react'

type State = { error: Error | null }

/** Shows the error on screen instead of a blank page if something throws while rendering. */
export default class ErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  render() {
    if (this.state.error) {
      return (
        <pre style={{ padding: 24, whiteSpace: 'pre-wrap', color: '#9a0b10' }}>
          {`Something went wrong:\n${this.state.error.message}`}
        </pre>
      )
    }
    return this.props.children
  }
}
