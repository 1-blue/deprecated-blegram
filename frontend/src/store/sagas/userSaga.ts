import { all, call, fork, put, takeLatest } from "redux-saga/effects";

// types
import type { AxiosResponse } from "axios";
import {
  LOAD_TO_ME_FAILURE,
  LOAD_TO_ME_REQUEST,
  LOAD_TO_ME_SUCCESS,
  LoadToMeResponse,
  FollowResponse,
  FOLLOW_SUCCESS,
  FOLLOW_FAILURE,
  FOLLOW_REQUEST,
  UnfollowResponse,
  UNFOLLOW_SUCCESS,
  UNFOLLOW_FAILURE,
  UNFOLLOW_REQUEST,
  LoadToUserResponse,
  LOAD_TO_USER_SUCCESS,
  LOAD_TO_USER_FAILURE,
  LOAD_TO_USER_REQUEST,
  LoadFollowersResponse,
  LOAD_FOLLOWERS_SUCCESS,
  LOAD_FOLLOWERS_FAILURE,
  LOAD_FOLLOWERS_REQUEST,
  LoadFollowingsResponse,
  LOAD_FOLLOWINGS_SUCCESS,
  LOAD_FOLLOWINGS_FAILURE,
  LOAD_FOLLOWINGS_REQUEST,
  LoadMeDetailResponse,
  LOAD_ME_DETAIL_SUCCESS,
  LOAD_ME_DETAIL_FAILURE,
  LOAD_ME_DETAIL_REQUEST,
  EditAccountResponse,
  EDIT_ACCOUNT_SUCCESS,
  EDIT_ACCOUNT_FAILURE,
  EDIT_ACCOUNT_REQUEST,
  EditPasswordResponse,
  EDIT_PASSWORD_SUCCESS,
  EDIT_PASSWORD_FAILURE,
  EDIT_PASSWORD_REQUEST,
  SignOutResponse,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_OUT_REQUEST,
} from "@src/store/types";

// api
import {
  apiLoadToMe,
  apiFollow,
  apiUnfollow,
  apiLoadToUser,
  apiLoadFollowers,
  apiLoadFollowings,
  apiEditAccount,
  apiEditPassword,
  apiLoadMeDetail,
  apiSignOut,
} from "@src/store/api";

function* loadToMe() {
  try {
    const { data }: AxiosResponse<LoadToMeResponse> = yield call(apiLoadToMe);

    yield put({ type: LOAD_TO_ME_SUCCESS, data });
  } catch (error: any) {
    console.error("userSaga loadToMe >> ", error);

    const message =
      error?.name === "AxiosError"
        ? error.response.data.message
        : "서버측 에러입니다. \n잠시후에 다시 시도해주세요";

    yield put({ type: LOAD_TO_ME_FAILURE, data: { message } });
  }
}
function* watchLoadToMe() {
  yield takeLatest(LOAD_TO_ME_REQUEST, loadToMe);
}

function* follow(action: any) {
  try {
    const { data }: AxiosResponse<FollowResponse> = yield call(
      apiFollow,
      action.data
    );

    yield put({ type: FOLLOW_SUCCESS, data });
  } catch (error: any) {
    console.error("userSaga follow >> ", error);

    const message =
      error?.name === "AxiosError"
        ? error.response.data.message
        : "서버측 에러입니다. \n잠시후에 다시 시도해주세요";

    yield put({ type: FOLLOW_FAILURE, data: { message } });
  }
}
function* watchFollow() {
  yield takeLatest(FOLLOW_REQUEST, follow);
}
function* unfollow(action: any) {
  try {
    const { data }: AxiosResponse<UnfollowResponse> = yield call(
      apiUnfollow,
      action.data
    );

    yield put({ type: UNFOLLOW_SUCCESS, data });
  } catch (error: any) {
    console.error("userSaga unfollow >> ", error);

    const message =
      error?.name === "AxiosError"
        ? error.response.data.message
        : "서버측 에러입니다. \n잠시후에 다시 시도해주세요";

    yield put({ type: UNFOLLOW_FAILURE, data: { message } });
  }
}
function* watchUnfollow() {
  yield takeLatest(UNFOLLOW_REQUEST, unfollow);
}

function* loadToUser(action: any) {
  try {
    const { data }: AxiosResponse<LoadToUserResponse> = yield call(
      apiLoadToUser,
      action.data
    );

    yield put({ type: LOAD_TO_USER_SUCCESS, data });
  } catch (error: any) {
    console.error("userSaga loadToUser >> ", error);

    const message =
      error?.name === "AxiosError"
        ? error.response.data.message
        : "서버측 에러입니다. \n잠시후에 다시 시도해주세요";

    yield put({ type: LOAD_TO_USER_FAILURE, data: { message } });
  }
}
function* watchLoadToUser() {
  yield takeLatest(LOAD_TO_USER_REQUEST, loadToUser);
}

function* loadFollowers(action: any) {
  try {
    const { data }: AxiosResponse<LoadFollowersResponse> = yield call(
      apiLoadFollowers,
      action.data
    );

    yield put({ type: LOAD_FOLLOWERS_SUCCESS, data });
  } catch (error: any) {
    console.error("userSaga loadFollowers >> ", error);

    const message =
      error?.name === "AxiosError"
        ? error.response.data.message
        : "서버측 에러입니다. \n잠시후에 다시 시도해주세요";

    yield put({ type: LOAD_FOLLOWERS_FAILURE, data: { message } });
  }
}
function* watchLoadFollowers() {
  yield takeLatest(LOAD_FOLLOWERS_REQUEST, loadFollowers);
}
function* loadFollowings(action: any) {
  try {
    const { data }: AxiosResponse<LoadFollowingsResponse> = yield call(
      apiLoadFollowings,
      action.data
    );

    yield put({ type: LOAD_FOLLOWINGS_SUCCESS, data });
  } catch (error: any) {
    console.error("userSaga loadFollowings >> ", error);

    const message =
      error?.name === "AxiosError"
        ? error.response.data.message
        : "서버측 에러입니다. \n잠시후에 다시 시도해주세요";

    yield put({ type: LOAD_FOLLOWINGS_FAILURE, data: { message } });
  }
}
function* watchLoadFollowings() {
  yield takeLatest(LOAD_FOLLOWINGS_REQUEST, loadFollowings);
}

function* loadMeDetail() {
  try {
    const { data }: AxiosResponse<LoadMeDetailResponse> = yield call(
      apiLoadMeDetail
    );

    yield put({ type: LOAD_ME_DETAIL_SUCCESS, data });
  } catch (error: any) {
    console.error("userSaga loadMeDetail >> ", error);

    const message =
      error?.name === "AxiosError"
        ? error.response.data.message
        : "서버측 에러입니다. \n잠시후에 다시 시도해주세요";

    yield put({ type: LOAD_ME_DETAIL_FAILURE, data: { message } });
  }
}
function* watchLoadMeDetail() {
  yield takeLatest(LOAD_ME_DETAIL_REQUEST, loadMeDetail);
}

function* editAccount(action: any) {
  try {
    const { data }: AxiosResponse<EditAccountResponse> = yield call(
      apiEditAccount,
      action.data
    );

    yield put({ type: EDIT_ACCOUNT_SUCCESS, data });
  } catch (error: any) {
    console.error("userSaga editAccount >> ", error);

    const message =
      error?.name === "AxiosError"
        ? error.response.data.message
        : "서버측 에러입니다. \n잠시후에 다시 시도해주세요";

    yield put({ type: EDIT_ACCOUNT_FAILURE, data: { message } });
  }
}
function* watchEditAccount() {
  yield takeLatest(EDIT_ACCOUNT_REQUEST, editAccount);
}

function* editPassword(action: any) {
  try {
    const { data }: AxiosResponse<EditPasswordResponse> = yield call(
      apiEditPassword,
      action.data
    );

    yield put({ type: EDIT_PASSWORD_SUCCESS, data });
  } catch (error: any) {
    console.error("userSaga editPassword >> ", error);

    const message =
      error?.name === "AxiosError"
        ? error.response.data.message
        : "서버측 에러입니다. \n잠시후에 다시 시도해주세요";

    yield put({ type: EDIT_PASSWORD_FAILURE, data: { message } });
  }
}
function* watchEditPassword() {
  yield takeLatest(EDIT_PASSWORD_REQUEST, editPassword);
}

function* signOut(action: any) {
  try {
    const { data }: AxiosResponse<SignOutResponse> = yield call(
      apiSignOut,
      action.data
    );

    yield put({ type: SIGN_OUT_SUCCESS, data });
  } catch (error: any) {
    console.error("userSaga signOut >> ", error);

    const message =
      error?.name === "AxiosError"
        ? error.response.data.message
        : "서버측 에러입니다. \n잠시후에 다시 시도해주세요";

    yield put({ type: SIGN_OUT_FAILURE, data: { message } });
  }
}
function* watchSignOut() {
  yield takeLatest(SIGN_OUT_REQUEST, signOut);
}

export default function* userSaga() {
  yield all([
    fork(watchLoadToMe),
    fork(watchFollow),
    fork(watchUnfollow),
    fork(watchLoadToUser),
    fork(watchLoadFollowers),
    fork(watchLoadFollowings),
    fork(watchLoadMeDetail),
    fork(watchEditAccount),
    fork(watchEditPassword),
    fork(watchSignOut),
  ]);
}
