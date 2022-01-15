/**
 * 생성일: 2022/01/13
 * 수정일: 2022/01/15
 * 작성자: 1-blue
 *
 * 메인 페이지에서 보여줄 게시글 grid
 */

import React, { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Proptypes from "prop-types";

// styled-components
import { Wrapper } from "./style";

// common-components
import Icon from "@components/common/Icon";

const PostImageCard = ({ post }) => {
  const router = useRouter();
  const { me } = useSelector(state => state.user);
  const [isMouseHover, setIsMouseHover] = useState(false);

  // 2021/12/22 - 마우스 enter/leave 이벤트 핸들러 - by 1-blue
  const onMouseEnter = useCallback(() => setIsMouseHover(true), []);
  const onMouseLeave = useCallback(() => setIsMouseHover(false), []);

  // 2022/01/15 - 클릭 시 상세 게시글 페이지(ExplorePage)로 이동 - by 1-blue
  const goExplorePage = useCallback(() => {
    if (!me._id) {
      if (confirm("로그인 후에 접근이 가능합니다.\n로그인 페이지로 이동하시겠습니까?")) {
        return router.push("/login");
      }
      return;
    }
    router.push(`/explore/${post._id}`);
  }, [router]);

  return (
    <Wrapper
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      isMouseHover={isMouseHover}
      onClick={goExplorePage}
    >
      {/* 게시글의 대표 이미지 */}
      <img
        src={process.env.NEXT_PUBLIC_IMAGE_URL + "/" + post.Images[0].name}
        alt="게시글 이미지"
        className="post-image"
      />

      {/* 이미지가 2개 이상이라면 이미지 우측 상단에 표시 */}
      {post.Images.length === 1 || (
        <figure className="kinds">
          <Icon shape="images" width={24} height={24} fill="white" />
        </figure>
      )}

      {/* 이미지에 마우스 hover 시 댓글과 좋아요 개수 보여줌 ( pc전용 ) */}
      {isMouseHover && (
        <div className="post-info">
          <div>
            <Icon shape="heart" width={24} height={24} fill="white" selected={true} />
            <span>{post.PostLikers.length}</span>
          </div>
          <div>
            <Icon shape="comment" width={24} height={24} fill="white" />
            <span>{post.Comments.length}</span>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

PostImageCard.propTypes = {
  post: Proptypes.shape({
    _id: Proptypes.number.isRequired,
    content: Proptypes.string.isRequired,
    createdAt: Proptypes.string.isRequired,
    User: Proptypes.shape({
      _id: Proptypes.number,
      name: Proptypes.string,
      Images: Proptypes.arrayOf(
        Proptypes.shape({
          _id: Proptypes.number,
          name: Proptypes.string,
        }),
      ),
    }).isRequired,
    Images: Proptypes.arrayOf(
      Proptypes.shape({
        _id: Proptypes.number,
        name: Proptypes.string,
      }),
    ).isRequired,
    Comments: Proptypes.arrayOf(
      Proptypes.shape({
        _id: Proptypes.number,
        content: Proptypes.string,
        UserId: Proptypes.number,
        CommentId: Proptypes.number,
        User: Proptypes.shape({
          _id: Proptypes.number,
          name: Proptypes.string,
          Images: Proptypes.arrayOf(
            Proptypes.shape({
              _id: Proptypes.number,
              name: Proptypes.string,
            }),
          ),
        }),
      }),
    ).isRequired,
    PostLikers: Proptypes.arrayOf(
      Proptypes.shape({
        _id: Proptypes.number,
      }),
    ).isRequired,
  }).isRequired,
};

export default PostImageCard;