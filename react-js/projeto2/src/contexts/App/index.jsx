import { createContext } from 'react';
import { globalState } from './data';

const GlobalContext = createContext();

// eslint-disable-next-line
export const AppContext = ({ children }) => {
  return (
    <GlobalContext.Provider value={globalState}>
      {children}
    </GlobalContext.Provider>
  );
};
