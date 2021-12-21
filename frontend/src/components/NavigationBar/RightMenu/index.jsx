import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

// components
import Icon from "@components/common/Icon";
import Avatar from "@components/common/Avatar";
import Menu from "@components/common/Menu";

// styled-components
import { Wrapper } from "./style";

// action
import { localLogoutAction, resetMessageAction } from "@store/actions";

const RightMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.user);
  const { logoutDone, logoutError } = useSelector(state => state.auth);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (!(logoutDone || logoutError)) return;
    alert(logoutDone || logoutError);

    dispatch(resetMessageAction());

    if (logoutDone) navigate("/");
  }, [logoutDone, logoutError]);

  // 2021/12/21 - 로그아웃 이벤트 - by 1-blue
  const onClickLogout = useCallback(() => {
    dispatch(localLogoutAction());
  }, []);

  // 2021/12/21 - 본인 프로필 메뉴 토글 이벤트 - by 1-blue
  const onClickShowMenu = useCallback(() => {
    setShowMenu(prev => !prev);
  }, []);

  //
  const handleCloseMenu = useCallback(() => {
    if (showMenu) {
      setShowMenu(false);
    }
  }, [showMenu]);

  // 2021/12/21 - 본인 프로필 메뉴 다른 영역 클릭시 닫기 - by 1-blue
  useEffect(() => {
    window.addEventListener("click", handleCloseMenu);

    return () => window.removeEventListener("click", handleCloseMenu);
  }, [handleCloseMenu]);

  return (
    <Wrapper>
      {me ? (
        <>
          <li>
            <NavLink to="/">
              <Icon shape="home" medium />
            </NavLink>
          </li>
          <li>
            <NavLink to="/directMessage">
              <Icon shape="dm" medium />
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <Icon shape="add" medium />
            </NavLink>
          </li>
          <li>
            <NavLink to="/post">
              <Icon shape="compass" medium />
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <Icon shape="heart" medium />
            </NavLink>
          </li>
          <li>
            <Avatar
              width={30}
              height={30}
              src={me.Images[0].url ? me.Images[0].url : process.env.IMAGE_URL + "/" + me.Images[0].name}
              alt="유저의 프로필 이미지"
              onClick={onClickShowMenu}
            />
            {showMenu && (
              <Menu>
                <li>
                  <NavLink to="/profile">
                    <Icon shape="avatar" small />
                    <span>프로필</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/profile">
                    <Icon shape="bookmark" small />
                    <span>저장됨</span>
                  </NavLink>
                </li>
                <li onClick={onClickLogout}>
                  <span>로그아웃</span>
                </li>
              </Menu>
            )}
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/login">로그인</NavLink>
          </li>
          <li>
            <NavLink to="/signup">회원가입</NavLink>
          </li>
        </>
      )}
    </Wrapper>
  );
};

export default RightMenu;
