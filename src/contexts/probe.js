import { createContext, useReducer } from 'react';

export const ProbeContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_PROBE':
      const newProbes = action.payload;
      sessionStorage.setItem('probes', JSON.stringify(newProbes));

      return { probes: [...newProbes] };
    default:
      return state;
  }
};

export const ProbeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { probes: [] });
  const updateProbe = newProbes => {
    dispatch({
      type: 'UPDATE_PROBE',
      payload: newProbes,
    });
  };

  return (
    <ProbeContext.Provider value={{ probes: state.probes, updateProbe }}>
      {children}
    </ProbeContext.Provider>
  );
};
