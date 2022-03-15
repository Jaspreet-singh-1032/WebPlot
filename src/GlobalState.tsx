import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { initialStateType } from "./types";
import { ActionTypes } from "./actionTypes";

export const initialState: initialStateType = {
  csvData: [],
  csvHeaders: [],
};

export const GlobalStateContext = createContext<any>(initialState);

export const GlobalStateProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function setCsvData(csvData: any[]): void {
    dispatch({
      type: ActionTypes.setCSVData,
      payload: {
        csvHeaders: csvData[0],
        csvData: csvData.slice(1),
      },
    });
  }
  console.log(state);
  return (
    <GlobalStateContext.Provider
      value={{
        csvData: [],
        csvHeaders: [],
        setCsvData,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
