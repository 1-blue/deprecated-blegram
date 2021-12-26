import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  width: 100%;

  & > .image-container {
    display: -webkit-inline-box;
    overflow: hidden;
    height: 100%;

    & > li > img {
      width: 100%;
      height: 100%;
    }
  }

  & > .prev-button,
  & > .next-button {
    position: absolute;
    top: 50%;
    background-color: rgba(125, 125, 125, 0.5);
    border-radius: 100%;
    padding: 0.5rem;
    font-weight: bold;
    font-size: 1.2rem;
    transform: translateY(-50%);
    color: white;
  }
  & > .next-button {
    right: 2%;
  }
  & > .prev-button {
    left: 2%;
  }

  & > .dots {
    display: inline-flex;
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translateX(-50%);
    cursor: no-drop;

    & > li {
      font-size: 2rem;
      color: white;
    }
  }
  & > .image-number {
    position: absolute;
    top: 90%;
    left: 50%;
    background-color: rgba(100, 100, 100, 0.3);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    transform: translateX(-50%);
  }

  @media (max-width: 1024px) {
    & > .image-number {
      top: 85%;
      padding: 0.2rem 0.5rem;
      border-radius: 8px;
      font-size: 0.8rem;
    }
  }
`;