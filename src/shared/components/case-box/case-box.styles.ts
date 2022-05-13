import styled, { css, keyframes } from "styled-components/macro";

const FadeBox = styled.div(
  ({
    $isShowInitial,
    $animationDuration,
    $shouldRender,
  }: {
    $isShowInitial: boolean;
    $animationDuration: number;
    $shouldRender: boolean;
  }) => {
    const fadeIn = keyframes`
    0% {
      opacity: ${$isShowInitial ? 1 : 0};
    }
    100% {
      opacity: 1;
    }
  `;

    const fadeOut = keyframes`
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  `;

    return css`
      position: absolute;
      z-index: 300;

      animation: ${$shouldRender ? fadeIn : fadeOut} ${$animationDuration}ms;
    `;
  }
);

const ModalWrapper = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  z-index: 300;

  width: 100%;
  height: calc(100vh - 50px);

  overflow-y: hidden;

  border-radius: 5px;

  @media (min-width: 992px) {
    top: 50%;
    left: 50%;

    width: calc(20vw - 20px);
    min-width: 320px;
    height: auto;
    max-height: 85vh;

    transform: translate(-50%, -50%);
  }
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

  background-color: #fff;

  box-shadow: 0 3px 16px rgb(0 0 0 / 30%);
`;

const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  height: calc(100% - 1rem);
  margin: 0.5rem;
  padding: 0.5rem;

  @media (min-width: 768px) {
    height: calc(100% - 2rem);

    margin: 1rem;
    padding: 1rem;
  }

  @media (min-width: 992px) {
    max-height: calc(85vh - 50px);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 299;

  background-color: #000;
  opacity: 0.3;
`;

const ModalBody = styled.div`
  max-height: calc(85vh - 105px);

  [data-has-footer="true"] & {
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    max-height: calc(75vh - 105px);
  }
`;

const CloseButton = styled.div`
  position: absolute;

  right: 0;
  top: 0;

  width: 20px;
  height: 20px;

  cursor: pointer;

  &::after,
  &:before {
    content: "";

    position: absolute;

    background-color: #000;

    transform: rotate(45deg);

    transition: all 0.2s ease-in-out;
  }

  &:after {
    left: 9px;
    top: 0;

    width: 2px;
    height: 100%;
  }

  &:before {
    left: 0;
    top: 9px;

    height: 2px;
    width: 100%;
  }

  &:hover {
    &::after,
    &::before {
      background-color: #26c281;
    }
  }
`;

const Case = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 200px;

  img {
    width: 100%;
    height: 100%;

    object-fit: contain;
  }
`;

const Name = styled.div`
  margin-bottom: 10px;

  font-size: 20px;

  color: #232323;
`;

const Price = styled.div`
  font-weight: bold;
  font-size: 25px;

  color: #26c281;
`;

const Description = styled.div`
  margin-bottom: 10px;

  font-size: 16px;
`;

export default {
  FadeBox,
  ModalBody,
  Overlay,
  Container,
  Modal,
  ModalWrapper,
  CloseButton,
  Case,
  Image,
  Name,
  Price,
  Description,
};
