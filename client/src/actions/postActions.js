import axios from 'axios';

import {POST_LOADING, ADD_POST, GET_POSTS, GET_ERRORS, DELETE_POST, GET_POST, CLEAR_ERRORS} from "./types";

//Add post
export const addPost = postData => dispatch => {
  dispatch(clearErrors);
  axios
    .post('/api/posts', postData)
    .then(res => dispatch({
      type: ADD_POST,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
};

//get posts
export const getPosts = () => dispatch => {
  dispatch(setPostLoading());
  axios
    .get('/api/posts')
    .then(res => dispatch({
      type: GET_POSTS,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: GET_POSTS,
      payload: null
    }))
};

//delete post
export const deletePost = id => dispatch => {
  axios
    .delete(`/api/posts/${id}`)
    .then(res => dispatch({
      type: DELETE_POST,
      payload: id
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
};

//Add like
export const addLike = id => dispatch => {
  axios
    .post(`/api/posts/like/${id}`)
    .then(res => dispatch(getPosts()))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
};

//remove like
export const removeLike = id => dispatch => {
  axios
    .post(`/api/posts/unlike/${id}`)
    .then(res => dispatch(getPosts()))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
};

//get posts
export const getPost = (id) => dispatch => {
  dispatch(setPostLoading());
  axios
    .get(`/api/posts/${id}`)
    .then(res => dispatch({
      type: GET_POST,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: GET_POST,
      payload: null
    }))
};

//Add comment
export const addComment = (postId, commentData) => dispatch => {
  dispatch(clearErrors);
  axios
    .post(`/api/posts/comment/${postId}`, commentData)
    .then(res => dispatch({
      type: GET_POST,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
};

//delete comment
export const deleteComment = (postId, commentId) => dispatch => {
  axios
    .delete(`/api/posts/comment/${postId}/${commentId}`)
    .then(res => dispatch({
      type: GET_POST,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
};

//set loading state
export const setPostLoading = () => {
  return {
    type: POST_LOADING
  }
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  }
};