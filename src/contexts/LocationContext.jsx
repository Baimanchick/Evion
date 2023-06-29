import React, { createContext, useContext, useReducer } from "react";
import { ACTIONS, LOCATIONS_URL } from "../utils/consts";
import axios from "axios";

const locationContext = createContext();

export function useLocationContext() {
  return useContext(locationContext);
}

const initState = {
  location: [],
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.location:
      return { ...state, location: action.payload };

    default:
      return state;
  }
}

function LocationContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  async function getLocations() {
    try {
      const res = await axios.get(`${LOCATIONS_URL}`);
      dispatch({
        type: ACTIONS.location,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function addMarker(newMarker) {
    try {
      await axios.post(LOCATIONS_URL, newMarker);
      getLocations();
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteMarker(id) {
    try {
      await axios.delete(`${LOCATIONS_URL}/${id}`);
      getLocations();
    } catch (error) {
      console.log(error);
    }
  }

  const value = {
    location: state.location,
    getLocations,
    addMarker,
    deleteMarker,
  };

  return (
    <locationContext.Provider value={value}>
      {children}
    </locationContext.Provider>
  );
}

export default LocationContext;
