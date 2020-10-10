import React from 'react';

export default class ErrorButton extends React.Component {
  state = {
    doError: false
  };

  clickHandler = () => {
    this.setState({
      doError: true
    });
  };

  render () {
    const { doError } = this.state;

    if (doError) {
      this.boo.bar = 123;
    }

    return (
      <button className="btn  btn-danger"
              onClick={this.clickHandler}
      >Error</button>
    );
  }
}
