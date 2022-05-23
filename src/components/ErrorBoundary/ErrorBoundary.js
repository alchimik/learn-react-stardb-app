import React from 'react';
import ErrorIndicator from '../ErrorIndicator';

export default class ErrorBoundary extends React.Component {
  state = {
    error: false
  };

  componentDidCatch (error, errorInfo) {
    this.setState({ error: error });
  }

  render () {
    if (this.state.error) {
      return <ErrorIndicator/>;
    }

    return this.props.children;
  }
}
