import type { FC } from "react";
import { Outlet } from "react-router-dom";

import Styled from "./layout.styles";

const Layout: FC = () => (
  <Styled.Wrapper>
    <Outlet />
  </Styled.Wrapper>
);

export default Layout;
