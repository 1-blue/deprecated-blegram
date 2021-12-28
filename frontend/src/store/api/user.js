import axios from "axios";

const authInstance = axios.create({
  baseURL: (process.env.NODE_ENV === "production" ? process.env.PROD_SERVER_URL : process.env.DEV_SERVER_URL) + "/user",
  withCredentials: true,
  timeout: 2500,
});

// 2021/12/20 - 로그인한 유저 정보 요청 - by 1-blue
export function apiLoadToMe() {
  return authInstance.get("/me");
}

// 2021/12/20 - 회원가입 요청 - by 1-blue
export function apiSignup(body) {
  return authInstance.post("/", body);
}
