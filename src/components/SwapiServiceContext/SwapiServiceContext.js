import React from 'react';

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

const { Provider: SwapiServiceProvider, Consumer: SwapiServiceConsumer } = React.createContext();

export { SwapiServiceProvider, SwapiServiceConsumer, withSwapiService };
