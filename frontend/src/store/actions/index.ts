import { RESET_MESSAGE } from "../types";

export const resetMessage = () => ({
  type: RESET_MESSAGE,
});

export {
  localLoginRequest,
  localLoginSuccess,
  localLoginFailure,
  localLogoutRequest,
  localLogoutSuccess,
  localLogoutFailure,
} from "./authAction";
export type { AuthActionRequest } from "./authAction";

export {
  loadToMeRequest,
  loadToMeSuccess,
  loadToMeFailure,
  followFailure,
  followRequest,
  followSuccess,
  unfollowFailure,
  unfollowRequest,
  unfollowSuccess,
  loadFollowersFailure,
  loadFollowersRequest,
  loadFollowersSuccess,
  loadFollowingsFailure,
  loadFollowingsRequest,
  loadFollowingsSuccess,
  loadToUserFailure,
  loadToUserRequest,
  loadToUserSuccess,
  loadMeDetailFailure,
  loadMeDetailRequest,
  loadMeDetailSuccess,
} from "./userAction";
export type { UserActionRequest } from "./userAction";

export {
  appendBookmarkFailure,
  appendBookmarkRequest,
  appendBookmarkSuccess,
  appendCommentFailure,
  appendCommentRequest,
  appendCommentSuccess,
  appendLikeToCommentFailure,
  appendLikeToCommentRequest,
  appendLikeToCommentSuccess,
  appendLikeToPostFailure,
  appendLikeToPostRequest,
  appendLikeToPostSuccess,
  closeWriteModalRequest,
  loadCommentsFailure,
  loadCommentsRequest,
  loadCommentsSuccess,
  loadDetailPostsFailure,
  loadDetailPostsRequest,
  loadDetailPostsSuccess,
  loadPostsFailure,
  loadPostsRequest,
  loadPostsSuccess,
  openWriteModalRequest,
  removeBookmarkFailure,
  removeBookmarkRequest,
  removeBookmarkSuccess,
  removeCommentFailure,
  removeCommentRequest,
  removeCommentSuccess,
  removeLikeToCommentFailure,
  removeLikeToCommentRequest,
  removeLikeToCommentSuccess,
  removeLikeToPostFailure,
  removeLikeToPostRequest,
  removeLikeToPostSuccess,
  removePostFailure,
  removePostRequest,
  removePostSuccess,
  uploadPostFailure,
  uploadPostRequest,
  uploadPostSuccess,
  loadRecommentsRequest,
  loadRecommentsSuccess,
  loadRecommentsFailure,
  loadPostsOfHashtagRequest,
  loadPostsOfHashtagSuccess,
  loadPostsOfHashtagFailure,
  loadPostsDetailOfUserFailure,
  loadPostsDetailOfUserRequest,
  loadPostsDetailOfUserSuccess,
  loadPostsOfBookmarkFailure,
  loadPostsOfBookmarkRequest,
  loadPostsOfBookmarkSuccess,
  loadPostsOfUserFailure,
  loadPostsOfUserRequest,
  loadPostsOfUserSuccess,
} from "./postAction";
export type { PostActionRequest } from "./postAction";

export {
  addRoomFailure,
  addRoomRequest,
  addRoomSuccess,
  loadRoomsFailure,
  loadRoomsRequest,
  loadRoomsSuccess,
  loadChatsRequest,
  loadChatsFailure,
  loadChatsSuccess,
} from "./chatAction";
export type { ChatActionRequest } from "./chatAction";
