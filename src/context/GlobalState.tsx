import React, { createContext, useReducer } from "react";
import { StoreState } from "./mainTypes";
import AppReducer from './AppReducer';

// Initial state
const initialState: StoreState = {
  transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 }
  ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
interface Props {
  children: React.ReactNode,
}

export const GlobalProvider = ({ children }: Props) => {
  
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return(
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>
  );
};

