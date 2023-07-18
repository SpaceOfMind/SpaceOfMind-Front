import { Component, createContext } from 'react';

const Context = createContext();

const { Provider, Consumer: ProbeConsumer } = Context;

class ProbeProvider extends Component {
  state = {
    probe: [],
  };
  actions = {
    update: newProbes => {
      sessionStorage.setItem('probes', JSON.stringify(newProbes));
      this.setState({ probe: [...newProbes] });
    },
  };

  render() {
    const { state, actions } = this;
    const value = { state, actions };

    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

function useProbe(WrappedComponent) {
  return function useProbe(props) {
    return (
      <ProbeConsumer>
        {({ state, actions }) => (
          <WrappedComponent probe={state.probe} update={actions.update} />
        )}
      </ProbeConsumer>
    );
  };
}

export { ProbeProvider, ProbeConsumer, useProbe };
