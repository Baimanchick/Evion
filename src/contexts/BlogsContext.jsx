import axios from "axios";
import React, { createContext, useContext, useReducer, useState } from "react";
import { ACTIONS, BASE_URL, BLOGS_URL } from "../utils/consts";

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

  async function deleteBlog(id) {
    try {
      await axios.delete(`${BLOGS_URL}/${id}`);
      getBlogs();
    } catch (error) {
      console.log(error);
    }
  }

  async function addBlog(newBlog) {
    try {
      await axios.post(`${BLOGS_URL}`, newBlog);
      getBlogs();
    } catch (error) {
      console.log(error);
    }
  }

  async function getOneBlog(id) {
    try {
      const { data } = await axios.get(`${BLOGS_URL}/${id}`);
      dispatch({
        type: ACTIONS.oneBlog,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  const value = {
    blogs: state.blogs,
    oneBlog: state.oneBlog,
    getBlogs,
    deleteBlog,
    addBlog,
    getOneBlog,
  };

  return <blogContext.Provider value={value}>{children}</blogContext.Provider>;
}

export default BlogsContext;
