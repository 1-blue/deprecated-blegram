/**
 * 생성일: 2022/01/16
 * 수정일: 2022/01/26
 * 작성자: 1-blue
 *
 * 게시글의 댓글 생성 폼
 * 아바타 정보 수정 ( 로그인한 유저의 이미지 부여 )
 * 비로그인시 접근 가능하도록 수정
 */

import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import Proptypes from "prop-types";

// styled-components
import { Wrapper } from "./style";

// common-components
import Avatar from "@components/common/Avatar";
import Button from "@components/common/Button";

const PostCardCommentForm = forwardRef(
  ({ text, onChangeText, textareaResize, onSubmitComment, setIsFocus }, textareaRef) => {
    const { me } = useSelector(state => state.user);
    const { appendCommentToPostLoading } = useSelector(state => state.post);

    return (
      <>
        {me._id ? (
          <Wrapper onSubmit={onSubmitComment}>
            <Avatar width={28} height={28} image={me.Images[0]} $cursor className="post-card-comment-form-avatar" />

            <textarea
              value={text}
              onChange={onChangeText}
              onKeyDown={textareaResize}
              ref={textareaRef}
              rows={1}
              placeholder="댓글 달기..."
              className="post-card-form-text-area"
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
            />

            <Button
              type="submit"
              $comment
              className="post-card-comment-form-button"
              loading={appendCommentToPostLoading}
            >
              제출
            </Button>

            <span className="post-card-comment-from-text-length">{text.trim().length} / 200</span>
          </Wrapper>
        ) : (
          <span style={{ display: "block", textAlign: "center", fontSize: "0.9rem" }}>
            댓글을 입력하려면{" "}
            <Link href="/login">
              <a style={{ textDecoration: "underline" }}>로그인</a>
            </Link>
            후에 접근해주세요
          </span>
        )}
      </>
    );
  },
);

PostCardCommentForm.propTypes = {
  text: Proptypes.string.isRequired,
  onChangeText: Proptypes.func.isRequired,
  textareaResize: Proptypes.func.isRequired,
  onSubmitComment: Proptypes.func.isRequired,
  setIsFocus: Proptypes.func.isRequired,
};

export default PostCardCommentForm;
