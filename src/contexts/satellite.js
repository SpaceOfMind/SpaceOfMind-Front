import { Component, createContext } from 'react';

const Context = createContext();

const { Provider, Consumer: SatelliteConsumer } = Context;

class SatelliteProvider extends Component {
  state = {
    satellites: [],
  };
  actions = {
    update: newSatellites => {
      sessionStorage.setItem('satellites', JSON.stringify(newSatellites));
      this.setState({ satellites: [...newSatellites] });
    },
  };

  render() {
    const { state, actions } = this;
    const value = { state, actions };

    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

function useSatellite(WrappedComponent) {
  return function useSatellite(props) {
    return (
      <SatelliteConsumer>
        {({ state, actions }) => (
          <WrappedComponent
            satellites={state.satellites}
            update={newSatellites => {
              actions.update(newSatellites);
            }}
          />
        )}
      </SatelliteConsumer>
    );
  };
}

export { SatelliteProvider, SatelliteConsumer, useSatellite };
