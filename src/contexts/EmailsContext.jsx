import axios from 'axios';
import React, { createContext, useContext, useReducer, useState } from 'react';
import { ACTIONS, API, BASE_URL, LIMIT, SPAMS_URL } from '../utils/consts';

const emailContext = createContext();

export function useEmailContext() {
  return useContext(emailContext);
}

const initState = {
    emails: [],
    oneEmail: null,
    spamsDB: []
}

const spams = [];

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.emails:
            return {...state, emails: action.payload}
        case ACTIONS.oneEmail:
            return {...state, oneEmail: action.payload}
        case ACTIONS.spams:
            return {...state, spams: action.payload}
  
        default:
            return state
    }
}

function EmailContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);
  // const [currentPage, setCurrentPage] = useState(1);
  async function getEmails() {
    try {
        const res = await axios.get(`${BASE_URL}`);
        dispatch({
            type: ACTIONS.emails,
            payload: res.data
        })
    } catch (error) {
      console.log(error);
    }
  }

  async function getSpams() {
    try {
        const res = await axios.get(`${SPAMS_URL}`);
        console.log(res.data)
        dispatch({
            type: ACTIONS.spamsDB,
            payload: res.data
        })
    } catch (error) {
      console.log(error);
    }
  }

  async function addEmails(newEmail) {
    try {
      await axios.post(`${BASE_URL}`, newEmail);
      getEmails();
    } catch (error) {
      console.log(error)
    }
  }

  async function spamEmails(ID) {
    try {
      const res = await axios.get(`${BASE_URL}/${ID}`);
      spams.push(res.data);
      dispatch({
        type: ACTIONS.spamsDB,
        payload: spams
      })
      // console.log(state.emails[id - 1]);
      await axios.delete(`${BASE_URL}/${ID}`);
      getEmails();
    } catch (error) {
      console.log(error)
    }
  }

  // async function getOneEmail(id) {
  //   try {
  //       const { data } = await axios.get(`${API}/${id}`);
  //       console.log(data)
  //       dispatch({
  //           type: ACTIONS.oneFilm,
  //           payload: data
  //       })
  //   } catch (error) {
  //       console.log(error)
  //   }
  // }

  // async function addReview(newReview) {
  //   try {
  //       await axios.post(API, newReview);
  //       getMovies();
  //   } catch (error) {   
  //       console.log(error)
  //   }
  // }

  // async function deleteReview(id) {
  //   try {
  //       await axios.delete(`${API}/${id}`);
  //       getMovies()
  //   } catch (error) {
  //       console.log(error)
  //   }
  // }

  // async function editReview(id, newReview) {
  //   try {
  //       await axios.patch(`${API}/${id}`, newReview);
  //       getMovies();
  //   } catch (error) {
  //       console.log(error)
  //   }
  // }

  // async function addComment(id, newFilm) {
  //   try {
  //       await axios.patch(`${API}/${id}`, newFilm);
  //       // data.comments.push(newComment)
  //       getMovies();
  //   } catch (error) {
  //       console.log(error)
  //   }
  // }

  const value = {
    emails: state.emails,
    getEmails,
    oneEmail: state.oneEmail,
    addEmails,
    spamEmails,
    getSpams,
    spams: state.spamsDB
  }

  return <emailContext.Provider value={value}>{children}</emailContext.Provider>;
}

export default EmailContext;  