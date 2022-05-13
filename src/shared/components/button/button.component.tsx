import type { FC } from "react";

import Styled from "./button.styles";

const Button: FC<{
  isLoading: boolean;
  children: any;
  [key: string]: unknown;
}> = ({ isLoading, children, ...props }) => {
  return (
    <Styled.Button $isLoading={isLoading} {...props}>
      <span>{children}</span>
    </Styled.Button>
  );
};

export default Button;
