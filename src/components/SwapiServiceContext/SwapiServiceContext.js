import React from 'react';
import SwapiService from '../../services/SwapiService';

const { Provider: SwapiServiceProvider, Consumer: SwapiServiceConsumer } = React.createContext(new SwapiService());

export { SwapiServiceProvider, SwapiServiceConsumer };
