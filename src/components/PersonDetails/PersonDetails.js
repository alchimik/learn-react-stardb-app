import React from 'react';
import SwapiService from '../../services/SwapiService';

import './PersonDetails.scss';
import Spinner from '../Spinner';
import ErrorButton from '../ErrorButton';
import ErrorBoundary from '../ErrorBoundary';

class PersonDetails extends React.Component {
  swapiService = new SwapiService();

  state = {
    person: null
  };

  updatePerson = async (id) => {
    if (!id) {
      return;
    }

    this.setState({ person: null });
    const person = await this.swapiService.getPerson(id);
    this.setState({ person });
  };

  componentDidMount () {
    this.updatePerson(this.props.id);
  }

  componentDidCatch (error, errorInfo) {
    this.setState({ person: null });
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (this.props.id !== prevProps.id) {
      this.updatePerson(this.props.id);
    }
  }

  render () {
    console.log('render()');
    const { person } = this.state;

    const personNotSet = !person;
    console.log('personNotSet:', personNotSet);

    const isExpiredPerson = person && person.id !== this.props.id;
    console.log('isExpiredPerson:', isExpiredPerson);

    if (personNotSet || isExpiredPerson) {
      return <Spinner/>;
    }

    return (
      <ErrorBoundary>
        <div>
          <div>id: {person.id}</div>
          <div>name: {person.name}</div>
          <div>gender: {person.gender}</div>
          <div>birthYear: {person.birthYear}</div>
          <div>eyeColor: {person.eyeColor}</div>
          <div><ErrorButton/></div>
        </div>
      </ErrorBoundary>
    );
  }
}

export default PersonDetails;


