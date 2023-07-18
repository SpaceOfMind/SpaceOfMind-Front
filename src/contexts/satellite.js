import { createContext, useReducer } from 'react';

export const SatelliteContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_SATELLITE':
      const newSatellites = action.payload;
      sessionStorage.setItem('satellites', JSON.stringify(newSatellites));

      return { satellites: [...newSatellites] };
    default:
      return state;
  }
};

export const SatelliteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { satellites: [] });
  const updateSatellite = newSatellites => {
    dispatch({
      type: 'UPDATE_SATELLITE',
      payload: newSatellites,
    });
  };

  return (
    <SatelliteContext.Provider
      value={{ satellites: state.satellites, updateSatellite }}
    >
      {children}
    </SatelliteContext.Provider>
  );
};
