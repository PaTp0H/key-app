import styled, { css, keyframes } from "styled-components/macro";

const Button = styled.button(({ $isLoading }: { $isLoading: boolean }) => {
  const rotate = keyframes`
     from {
      transform: rotate(0);
     }
    to {
       transform: rotate(360deg);
     }
  `;

  return css`
    position: relative;

    display: inline-flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: 320px;
    height: 40px;

    padding: 10px;

    text-align: center;
    text-decoration: none;

    font-size: 16px;

    vertical-align: middle;

    transition: all 0.3s ease-in-out;

    border: 1px solid #26c281;
    border-radius: 5px;

    background-color: #fff;
    color: #26c281;

    cursor: pointer;

    span {
      transform: ${$isLoading ? "scale(0)" : "scale(1)"};
    }

    &:hover {
      background-color: #26c281;
      color: #fff;
    }

    &::after {
      content: "";
      display: block;
      width: 1.2em;
      height: 1.2em;
      position: absolute;
      left: calc(50% - 0.75em);
      top: calc(50% - 0.75em);
      border: 0.15em solid transparent;
      border-right-color: white;
      border-radius: 50%;
      animation: ${rotate} 0.7s linear infinite;
      opacity: ${$isLoading ? 1 : 0};
    }
  `;
});

export default { Button };
