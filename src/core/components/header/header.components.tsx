import type { FC } from "react";
import { useCart } from "../../contexts";

import Styled from "./header.styles";

const Header: FC = () => {
  const { cartValue } = useCart();

  return (
    <Styled.Header>
      <div>Logo</div>

      <div>{cartValue}</div>
    </Styled.Header>
  );
};

export default Header;
