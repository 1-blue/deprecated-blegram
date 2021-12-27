/* eslint-disable prettier/prettier */

import { all, call, fork, put, takeLatest } from "redux-saga/effects";

// types
import {
  CREATE_POST_REQUEST, CREATE_POST_SUCCESS, CREATE_POST_FAILURE,
  LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE,
  LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE,
  APPEND_LIKE_TO_POST_REQUEST, APPEND_LIKE_TO_POST_SUCCESS, APPEND_LIKE_TO_POST_FAILURE,
  REMOVE_LIKE_TO_POST_REQUEST, REMOVE_LIKE_TO_POST_SUCCESS, REMOVE_LIKE_TO_POST_FAILURE,
  APPEND_COMMENT_TO_POST_REQUEST, APPEND_COMMENT_TO_POST_SUCCESS, APPEND_COMMENT_TO_POST_FAILURE,
  REMOVE_COMMENT_TO_POST_REQUEST, REMOVE_COMMENT_TO_POST_SUCCESS, REMOVE_COMMENT_TO_POST_FAILURE,
 } from "@store/types";

// api
import { apiCreatePost, apiLoadPosts, apiLoadPost, apiAppendLikeToPost, apiRemoveLikeToPost, apiAppendCommentToPost, apiRemoveCommentToPost } from "@store/api";

function* createPost(action) {
  try {
    const { data } = yield call(apiCreatePost, action.data);

    yield put({
      type: CREATE_POST_SUCCESS,
      data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: CREATE_POST_FAILURE,
      data: error.response.data,
    });
  }
}
function* loadPosts(action) {
  try {
    const { data } = yield call(apiLoadPosts, action.data);

    yield put({
      type: LOAD_POSTS_SUCCESS,
      data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: LOAD_POSTS_FAILURE,
      data: error.response.data,
    });
  }
}
function* loadPost(action) {
  try {
    const { data } = yield call(apiLoadPost, action.data);

    yield put({
      type: LOAD_POST_SUCCESS,
      data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: LOAD_POST_FAILURE,
      data: error.response.data,
    });
  }
}
function* appendLikeToPost(action) {
  try {
    const { data } = yield call(apiAppendLikeToPost, action.data);

    yield put({
      type: APPEND_LIKE_TO_POST_SUCCESS,
      data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: APPEND_LIKE_TO_POST_FAILURE,
      data: error.response.data,
    });
  }
}
function* removeLikeToPost(action) {
  try {
    const { data } = yield call(apiRemoveLikeToPost, action.data);

    yield put({
      type: REMOVE_LIKE_TO_POST_SUCCESS,
      data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: REMOVE_LIKE_TO_POST_FAILURE,
      data: error.response.data,
    });
  }
}
function* appendCommentToPost(action) {
  try {
    const { data } = yield call(apiAppendCommentToPost, action.data);

    yield put({
      type: APPEND_COMMENT_TO_POST_SUCCESS,
      data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: APPEND_COMMENT_TO_POST_FAILURE,
      data: error.response.data,
    });
  }
}
function* removeCommentToPost(action) {
  try {
    const { data } = yield call(apiRemoveCommentToPost, action.data);

    yield put({
      type: REMOVE_COMMENT_TO_POST_SUCCESS,
      data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: REMOVE_COMMENT_TO_POST_FAILURE,
      data: error.response.data,
    });
  }
}

function* watchCreatePost() {
  yield takeLatest(CREATE_POST_REQUEST, createPost);
}
function* watchLoadPosts() {
  yield takeLatest(LOAD_POSTS_REQUEST, loadPosts);
}
function* watchLoadPost() {
  yield takeLatest(LOAD_POST_REQUEST, loadPost);
}
function* watchAppendLikeToPost() {
  yield takeLatest(APPEND_LIKE_TO_POST_REQUEST, appendLikeToPost);
}
function* watchRemoveLikeToPost() {
  yield takeLatest(REMOVE_LIKE_TO_POST_REQUEST, removeLikeToPost);
}
function* watchAppendCommentToPost() {
  yield takeLatest(APPEND_COMMENT_TO_POST_REQUEST, appendCommentToPost);
}
function* watchRemoveCommentToPost() {
  yield takeLatest(REMOVE_COMMENT_TO_POST_REQUEST, removeCommentToPost);
}

export default function* postSaga() {
  yield all([
    fork(watchCreatePost),
    fork(watchLoadPosts),
    fork(watchLoadPost),
    fork(watchAppendLikeToPost),
    fork(watchRemoveLikeToPost),
    fork(watchAppendCommentToPost),
    fork(watchRemoveCommentToPost),
  ]);
}
