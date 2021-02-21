import React from 'react';
import Spinner from '../../components/Spinner';
import ErrorIndicator from '../ErrorIndicator';

const withData = (View) => {
  return class extends React.Component {
    state = {
      data: null,
      loading: true,
      error: false
    };

    clearEffects = () => {};

    runDataLoad () {
      if (!this.props.getData) {
        return;
      }

      let ignoreResult = false;

      const onSuccess = (data) => {
        !ignoreResult && this.setState({ data, loading: false, error: false });
      };
      const onError = (error) => {
        !ignoreResult && this.setState({ data: null, loading: false, error: error });
      };

      this.setState({ data: null, loading: true, error: false });
      this.props.getData().then(
        onSuccess,
        onError
      );

      return () => ignoreResult = true;
    }

    componentDidMount () {
      this.clearEffects = this.runDataLoad();
    }

    componentDidCatch (error, errorInfo) {
      this.setState({ data: null, loading: false, error: error });
    }

    componentDidUpdate (prevProps, prevState, snapshot) {
      if (this.props.getData !== prevProps.getData) {
        this.clearEffects();
        this.clearEffects = this.runDataLoad();
      }
    }

    componentWillUnmount () {
      this.clearEffects();
    }

    render () {
      const { data, loading, error } = this.state;

      if (loading) {
        return <Spinner/>;
      }

      if (error) {
        console.log(error);
        return <ErrorIndicator/>;
      }

      return <View {...this.props} data={data}/>;
    }
  };
};

export default withData;
