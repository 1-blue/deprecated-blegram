import React, { Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

// common-components
import Icon from "@src/components/common/Icon";
import Avatar from "@src/components/common/Avatar";
import { ICON } from "@src/type";
import { PostState, UserState } from "@src/store/reducers";

const Wrapper = styled.section`
  position: relative;
  display: flex;
  align-items: baseline;
  & .nav-link {
    margin-left: 1.5em;
    cursor: pointer;
    font-weight: bold;
  }
  & .nav-link:first-child {
    margin-left: 0em;
  }
  & .nav-link:nth-last-child(2) {
    margin-right: 1.5em;
  }
`;

// { onClickProfileMenu, onClickCreatePostModal }

type Props = {
  setIsOpenMenu: Dispatch<SetStateAction<boolean>>;
};

const RightMenu = ({ setIsOpenMenu }: Props) => {
  const router = useRouter();
  const { me } = useSelector(({ user }: { user: UserState }) => user);
  // const { showCreatePostModal } = useSelector((state: PostState) => state)

  return (
    <Wrapper>
      {/* 로그인 상태일 경우 */}
      {me?._id ? (
        <>
          <Link href="/">
            <a className="nav-link">
              <Icon
                icon={ICON.HOME}
                width={24}
                height={24}
                // $fill={!showCreatePostModal && router.pathname === "/"}
                $fill={router.pathname === "/"}
              />
            </a>
          </Link>
          <Link href="/dm">
            <a className="nav-link">
              <Icon
                icon={ICON.AIRPLANE}
                width={24}
                height={24}
                // $fill={
                //   !showCreatePostModal && router.pathname.startsWith("/dm")
                // }
              />
            </a>
          </Link>
          <i
            className="nav-link"
            // onClick={onClickCreatePostModal}
          >
            <Icon
              icon={ICON.CIRCLE_ADD}
              width={24}
              height={24}
              // $fill={showCreatePostModal}
            />
          </i>
          <Link href="/notice">
            <a className="nav-link">
              <Icon
                icon={ICON.HEART}
                width={24}
                height={24}
                // $fill={
                //   !showCreatePostModal && router.pathname.startsWith("/notice")
                // }
              />
            </a>
          </Link>
          <Avatar
            width={30}
            height={30}
            photo={me.Photos?.[0].name}
            alt="유저의 프로필 이미지"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpenMenu(true);
            }}
          />
        </>
      ) : (
        // 비로그인 상태일 경우
        <>
          <Link href="/login">
            <a className="nav-link">로그인</a>
          </Link>
          <Link href="/signup">
            <a className="nav-link">회원가입</a>
          </Link>
        </>
      )}
    </Wrapper>
  );
};

export default RightMenu;
