import React from 'react';
import ErrorIndicator from '../ErrorIndicator';

export default class ErrorBoundary extends React.Component {
  state = {
    error: false
  };

  componentDidCatch (error, errorInfo) {
    console.log('ErrorBoundary:componentDidCatch');
    this.setState({ error: error });
  }

  render () {
    if (this.state.error) {
      console.log('ErrorBoundary error', this.state.error);
      return <ErrorIndicator/>;
    }

    console.log('ErrorBoundary:render success');
    return this.props.children;
  }
}
