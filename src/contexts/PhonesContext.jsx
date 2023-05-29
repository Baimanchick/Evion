import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { ACTIONS, PHONES_URL } from "../utils/consts";

const phoneContext = createContext();

export function usePhoneContext() {
  return useContext(phoneContext);
}

const initState = {
  phones: [],
  onePhone: null,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.phones:
      return { ...state, phones: action.payload };
    case ACTIONS.onePhone:
      return { ...state, onePhone: action.payload };
    default:
      return state;
  }
}

function PhonesContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);
  
  async function getPhones() {
    try {
      const res = await axios.get(`${PHONES_URL}`);
      dispatch({
        type: ACTIONS.phones,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function addPhones(newPhone) {
    try {
      await axios.post(`${PHONES_URL}`, newPhone);
      getPhones();
    } catch (error) {
      console.log(error);
    }
  }

  const value = {
    phones: state.phones,
    getPhones,
    addPhones
  };

  return (
    <phoneContext.Provider value={value}>{children}</phoneContext.Provider>
  );
}

export default PhonesContext;
