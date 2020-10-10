import React from 'react';
import ErrorIndicator from '../ErrorIndicator';

export default class ErrorBoundary extends React.Component {
  state = {
    hasError: false
  };

  componentDidCatch (error, errorInfo) {
    console.log('ErrorBoundary:componentDidCatch');
    this.setState({ hasError: true });
  }

  render () {
    if (this.state.hasError) {
      console.log('ErrorBoundary:render error');
      return <ErrorIndicator/>;
    }

    console.log('ErrorBoundary:render success');
    return this.props.children;
  }
}
