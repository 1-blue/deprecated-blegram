/* eslint-disable prettier/prettier */
// 2021/12/22 - 게시글 관련 리듀서 - by 1-blue

//types
import {
  RESET_MESSAGE,
  CREATE_POST_REQUEST, CREATE_POST_SUCCESS, CREATE_POST_FAILURE,
  LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE,
} from "@store/types";

const initState = {
  // 게시글
  posts: [],

  // 게시글 생성 요청
  createPostLoading: false,
  createPostDone: null,
  createPostError: null,

  // 생성된 게시글 불러오기 요청
  loadPostsLoading: false,
  loadPostsDone: null,
  loadPostsError: null,
};

function postReducer(prevState = initState, action) {
  switch (action.type) {
    case RESET_MESSAGE:
      return {
        ...prevState,
        createPostLoading: false,
        createPostDone: null,
        createPostError: null,
      };

    case CREATE_POST_REQUEST:
      return {
        ...prevState,
        createPostLoading: true,
        createPostDone: null,
        createPostError: null,
      };
    case CREATE_POST_SUCCESS:
      return {
        ...prevState,
        createPostLoading: false,
        createPostDone: action.data.message,
        posts: [action.data.createdPost, ...prevState.posts ]
      };
    case CREATE_POST_FAILURE:
      return {
        ...prevState,
        createPostLoading: false,
        createPostError: action.data.message,
      };

    case LOAD_POSTS_REQUEST:
      return {
        ...prevState,
        loadPostsLoading: true,
        loadPostsDone: null,
        loadPostsError: null,
      };
    case LOAD_POSTS_SUCCESS:
      return {
        ...prevState,
        loadPostsLoading: false,
        loadPostsDone: action.data.message,
        posts: [...prevState.posts, ...action.data.posts],
      };
    case LOAD_POSTS_FAILURE:
      return {
        ...prevState,
        loadPostsLoading: false,
        loadPostsError: action.data.message,
      };

    default:
      return prevState;
  }
}

export default postReducer;