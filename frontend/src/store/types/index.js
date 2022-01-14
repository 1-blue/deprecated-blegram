// 메시지 초기화 - by 1-blue
export const RESET_MESSAGE = "RESET_MESSAGE";

// 2021/12/25 - 특정 게시글 모달창 나갈 때 기존 값 비워주기 - by 1-blue
export const RESET_POST = "RESET_POST";

// 2022/01/02 - explore 페이지 들어올 때 게시글들 초기화 - by 1-blue
export const RESET_POSTS = "RESET_POSTS";

// 2021/12/26 - 이미지 프리뷰 비우기 - by 1-blue
export const RESET_IMAGE_PREVIEW = "RESET_IMAGE_PREVIEW";

// 2021/12/31 - 특정 유저의 팔로워/팔로잉 비우기 - by 1-blue
export const RESET_FOLLOW = "RESET_FOLLOW";

// 2022/01/05 - 특정 유저의 게시글들 비우기 - by 1-blue
export const RESET_POSTS_OF_USER = "RESET_POSTS_OF_USER";

// 2022/01/14 - 게시글 생성 모달 열기/닫기 - by 1-blue
export const OPEN_CREATE_POST_MODAL = "OPEN_CREATE_POST_MODAL";
export const CLOSE_CREATE_POST_MODAL = "CLOSE_CREATE_POST_MODAL";

// 2021/12/20 - 로컬 로그인 요청 - by 1-blue
export const LOCAL_LOGIN_REQUEST = "LOCAL_LOGIN_REQUEST";
export const LOCAL_LOGIN_SUCCESS = "LOCAL_LOGIN_SUCCESS";
export const LOCAL_LOGIN_FAILURE = "LOCAL_LOGIN_FAILURE";

// 2021/12/20 - 로컬 로그아웃 요청 - by 1-blue
export const LOCAL_LOGOUT_REQUEST = "LOCAL_LOGOUT_REQUEST";
export const LOCAL_LOGOUT_SUCCESS = "LOCAL_LOGOUT_SUCCESS";
export const LOCAL_LOGOUT_FAILURE = "LOCAL_LOGOUT_FAILURE";

// 2021/12/20 - 회원가입 요청 - by 1-blue
export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

// 2021/12/20 - 로그인한 유저 정보 요청 - by 1-blue
export const LOAD_TO_ME_REQUEST = "LOAD_TO_ME_REQUEST";
export const LOAD_TO_ME_SUCCESS = "LOAD_TO_ME_SUCCESS";
export const LOAD_TO_ME_FAILURE = "LOAD_TO_ME_FAILURE";

// 2021/12/20 - 이미지(들) 업로드 요청 - by 1-blue
export const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
export const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
export const UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";

// 2021/12/22 - 게시글 생성 요청 변수 - by 1-blue
export const CREATE_POST_REQUEST = "CREATE_POST_REQUEST";
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";
export const CREATE_POST_FAILURE = "CREATE_POST_FAILURE";

// 2021/12/22 - 최신 게시글들 요청 변수 - by 1-blue
export const LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";
export const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
export const LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";

// 2021/12/22 - 특정 게시글 요청 변수 - by 1-blue
export const LOAD_POST_REQUEST = "LOAD_POST_REQUEST";
export const LOAD_POST_SUCCESS = "LOAD_POST_SUCCESS";
export const LOAD_POST_FAILURE = "LOAD_POST_FAILURE";

// 2021/12/27 - 특정 게시글 제거 요청 변수 - by 1-blue
export const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
export const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";

// 2021/12/25 - 게시글 좋아요 추가 - by 1-blue
export const APPEND_LIKE_TO_POST_REQUEST = "APPEND_LIKE_TO_POST_REQUEST";
export const APPEND_LIKE_TO_POST_SUCCESS = "APPEND_LIKE_TO_POST_SUCCESS";
export const APPEND_LIKE_TO_POST_FAILURE = "APPEND_LIKE_TO_POST_FAILURE";

// 2021/12/25 - 게시글 좋아요 삭제 - by 1-blue
export const REMOVE_LIKE_TO_POST_REQUEST = "REMOVE_LIKE_TO_POST_REQUEST";
export const REMOVE_LIKE_TO_POST_SUCCESS = "REMOVE_LIKE_TO_POST_SUCCESS";
export const REMOVE_LIKE_TO_POST_FAILURE = "REMOVE_LIKE_TO_POST_FAILURE";

// 2021/12/27 - 게시글 댓글 추가 - by 1-blue
export const APPEND_COMMENT_TO_POST_REQUEST = "APPEND_COMMENT_TO_POST_REQUEST";
export const APPEND_COMMENT_TO_POST_SUCCESS = "APPEND_COMMENT_TO_POST_SUCCESS";
export const APPEND_COMMENT_TO_POST_FAILURE = "APPEND_COMMENT_TO_POST_FAILURE";

// 2021/12/27 - 게시글 댓글 제거 - by 1-blue
export const REMOVE_COMMENT_TO_POST_REQUEST = "REMOVE_COMMENT_TO_POST_REQUEST";
export const REMOVE_COMMENT_TO_POST_SUCCESS = "REMOVE_COMMENT_TO_POST_SUCCESS";
export const REMOVE_COMMENT_TO_POST_FAILURE = "REMOVE_COMMENT_TO_POST_FAILURE";

// 2021/12/28 - 댓글에 좋아요 추가 - by 1-blue
export const APPEND_LIKE_TO_COMMENT_REQUEST = "APPEND_LIKE_TO_COMMENT_REQUEST";
export const APPEND_LIKE_TO_COMMENT_SUCCESS = "APPEND_LIKE_TO_COMMENT_SUCCESS";
export const APPEND_LIKE_TO_COMMENT_FAILURE = "APPEND_LIKE_TO_COMMENT_FAILURE";

// 2021/12/28 - 댓글에 좋아요 제거 - by 1-blue
export const REMOVE_LIKE_TO_COMMENT_REQUEST = "REMOVE_LIKE_TO_COMMENT_REQUEST";
export const REMOVE_LIKE_TO_COMMENT_SUCCESS = "REMOVE_LIKE_TO_COMMENT_SUCCESS";
export const REMOVE_LIKE_TO_COMMENT_FAILURE = "REMOVE_LIKE_TO_COMMENT_FAILURE";

// 2021/12/29 - 특정 댓글의 답글들 요청 - by 1-blue
export const LOAD_RECOMMENTS_REQUEST = "LOAD_RECOMMENTS_REQUEST";
export const LOAD_RECOMMENTS_SUCCESS = "LOAD_RECOMMENTS_SUCCESS";
export const LOAD_RECOMMENTS_FAILURE = "LOAD_RECOMMENTS_FAILURE";

// 2021/12/30 - 팔로우 요청 - by 1-blue
export const FOLLOW_REQUEST = "FOLLOW_REQUEST";
export const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
export const FOLLOW_FAILURE = "FOLLOW_FAILURE";

// 2021/12/30 - 언팔로우 요청 - by 1-blue
export const UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST";
export const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
export const UNFOLLOW_FAILURE = "UNFOLLOW_FAILURE";

// 2021/12/31 - 특정 유저 정보 요청 - by 1-blue
export const LOAD_TO_USER_REQUEST = "LOAD_TO_USER_REQUEST";
export const LOAD_TO_USER_SUCCESS = "LOAD_TO_USER_SUCCESS";
export const LOAD_TO_USER_FAILURE = "LOAD_TO_USER_FAILURE";

// 2021/12/31 - 특정 유저 팔로워들 정보 요청 - by 1-blue
export const LOAD_FOLLOWERS_REQUEST = "LOAD_FOLLOWERS_REQUEST";
export const LOAD_FOLLOWERS_SUCCESS = "LOAD_FOLLOWERS_SUCCESS";
export const LOAD_FOLLOWERS_FAILURE = "LOAD_FOLLOWERS_FAILURE";

// 2021/12/31 - 특정 유저 팔로잉들 정보 요청 - by 1-blue
export const LOAD_FOLLOWINGS_REQUEST = "LOAD_FOLLOWINGS_REQUEST";
export const LOAD_FOLLOWINGS_SUCCESS = "LOAD_FOLLOWINGS_SUCCESS";
export const LOAD_FOLLOWINGS_FAILURE = "LOAD_FOLLOWINGS_FAILURE";

// 2022/01/01 - 특정 해시태그의 게시글들 요청 - by 1-blue
export const LOAD_POSTS_OF_HASHTAG_REQUEST = "LOAD_POSTS_OF_HASHTAG_REQUEST";
export const LOAD_POSTS_OF_HASHTAG_SUCCESS = "LOAD_POSTS_OF_HASHTAG_SUCCESS";
export const LOAD_POSTS_OF_HASHTAG_FAILURE = "LOAD_POSTS_OF_HASHTAG_FAILURE";

// 2022/01/02 - 로그인한 유저의 상세정보 요청 - by 1-blue
export const LOAD_TO_ME_DETAIL_REQUEST = "LOAD_TO_ME_DETAIL_REQUEST";
export const LOAD_TO_ME_DETAIL_SUCCESS = "LOAD_TO_ME_DETAIL_SUCCESS";
export const LOAD_TO_ME_DETAIL_FAILURE = "LOAD_TO_ME_DETAIL_FAILURE";

// 2022/01/03 - 로그인한 유저의 기본정보 변경 - by 1-blue
export const EDIT_TO_ME_ALL_REQUEST = "EDIT_TO_ME_ALL_REQUEST";
export const EDIT_TO_ME_ALL_SUCCESS = "EDIT_TO_ME_ALL_SUCCESS";
export const EDIT_TO_ME_ALL_FAILURE = "EDIT_TO_ME_ALL_FAILURE";

// 2022/01/03 - 로그인한 유저의 비밀번호 변경 - by 1-blue
export const EDIT_TO_ME_PASSWORD_REQUEST = "EDIT_TO_ME_PASSWORD_REQUEST";
export const EDIT_TO_ME_PASSWORD_SUCCESS = "EDIT_TO_ME_PASSWORD_SUCCESS";
export const EDIT_TO_ME_PASSWORD_FAILURE = "EDIT_TO_ME_PASSWORD_FAILURE";

// 2022/01/03 - 로그인한 유저의 회원탈퇴 - by 1-blue
export const SIGN_OUT_REQUEST = "SIGN_OUT_REQUEST";
export const SIGN_OUT_SUCCESS = "SIGN_OUT_SUCCESS";
export const SIGN_OUT_FAILURE = "SIGN_OUT_FAILURE";

// 2022/01/04 - 로그인한 유저의 게시글들 요청 - by 1-blue
export const LOAD_POSTS_OF_USER_REQUEST = "LOAD_POSTS_OF_USER_REQUEST";
export const LOAD_POSTS_OF_USER_SUCCESS = "LOAD_POSTS_OF_USER_SUCCESS";
export const LOAD_POSTS_OF_USER_FAILURE = "LOAD_POSTS_OF_USER_FAILURE";

// 2022/01/14 - 특정 프리뷰 제거 - by 1-blue
export const REMOVE_PREVIEW_REQUEST = "REMOVE_PREVIEW_REQUEST";
export const REMOVE_PREVIEW_SUCCESS = "REMOVE_PREVIEW_SUCCESS";
export const REMOVE_PREVIEW_FAILURE = "REMOVE_PREVIEW_FAILURE";
