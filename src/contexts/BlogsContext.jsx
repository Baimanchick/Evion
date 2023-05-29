import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { ACTIONS, BASE_URL, BLOGS_URL, } from "../utils/consts";

const blogContext = createContext();

export function useBlogContext() {
  return useContext(blogContext);
}

const initState = {
  blogs: [],
  oneBlog: null,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.blogs:
      return { ...state, blogs: action.payload };
    case ACTIONS.oneBlog:
      return { ...state, oneBlog: action.payload };
    default:
      return state;
  }
}

function BlogsContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);
  
  async function getBlogs() {
    try {
      const res = await axios.get(`${BLOGS_URL}`);
      dispatch({
        type: ACTIONS.blogs,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

//   async function addEmails(newEmail) {
//     try {
//       await axios.post(`${BASE_URL}`, newEmail);
//       getEmails();
//     } catch (error) {
//       console.log(error);
//     }
//   }

  const value = {
    blogs: state.blogs,
    getBlogs,
  };

  return (
    <blogContext.Provider value={value}>{children}</blogContext.Provider>
  );
}

export default BlogsContext;