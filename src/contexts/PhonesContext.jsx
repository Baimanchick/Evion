import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { ACTIONS, PHONES_URL, PHONES_URL2 } from "../utils/consts";

const phoneContext = createContext();

export function usePhoneContext() {
  return useContext(phoneContext);
}

const initState = {
  phones: [],
  onePhone: null,
  phones2: [],
  onePhone2: null,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.phones:
      return { ...state, phones: action.payload };
    case ACTIONS.onePhone:
      return { ...state, onePhone: action.payload };
    case ACTIONS.phones2:
      return { ...state, phones2: action.payload };
    case ACTIONS.onePhone2:
      return { ...state, onePhone2: action.payload };
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

  async function deletePhone(id) {
    try {
      await axios.delete(`${PHONES_URL}/${id}`);
      getPhones();
    } catch (error) {
      console.log(error);
    }
  }

  async function getPhones2() {
    try {
      const res = await axios.get(`${PHONES_URL2}`);
      dispatch({
        type: ACTIONS.phones2,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function addPhones2(newPhone) {
    try {
      await axios.post(`${PHONES_URL2}`, newPhone);
      getPhones2();
    } catch (error) {
      console.log(error);
    }
  }

  const value = {
    phones: state.phones,
    getPhones,
    addPhones,
    deletePhone,
    onePhone: state.onePhone,
    phones2: state.phones2,
    onePhone2: state.onePhone2,
    addPhones2,
    getPhones2,
  };

  return (
    <phoneContext.Provider value={value}>{children}</phoneContext.Provider>
  );
}

export default PhonesContext;
