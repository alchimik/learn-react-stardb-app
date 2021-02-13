import React from 'react';
import { SwapiServiceConsumer } from '../SwapiServiceContext';

function withSwapiService (Wrapped, mapMethodsToProps) {
  return (props) => {
    return <SwapiServiceConsumer>
      {
        (swapiService) => {
          const ssProps = mapMethodsToProps(swapiService);

          return <Wrapped {...props} {...ssProps}/>;
        }
      }
    </SwapiServiceConsumer>;
  };
}

export default withSwapiService;
