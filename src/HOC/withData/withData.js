import React from 'react';
import Spinner from '../../components/Spinner';

const withData = (View) => {
  return class extends React.Component {
    state = {
      data: null
    };

    async runDataLoad () {
      if (!this.props.getData) {
        return;
      }

      this.setState({ data: null });
      const data = await this.props.getData();
      this.setState({ data });
    }

    componentDidMount () {
      this.runDataLoad(this.props.id);
    }

    componentDidCatch (error, errorInfo) {
      this.setState({ data: null });
    }

    componentDidUpdate (prevProps, prevState, snapshot) {
      if (this.props.getData !== prevProps.getData) {
        this.runDataLoad();
      }
    }

    render () {
      var { data } = this.state;

      if (data === null) {
        return <Spinner/>;
      }

      return <View {...this.props} data={data}/>;
    }
  };
};

export default withData;
