import type { FC } from "react";
import { Reset } from "styled-reset";

import { Header } from "./core/components";
import Routing from "./core/routing";

const App: FC = () => {
  return (
    <>
      <Reset />

      <Header />

      <Routing />
    </>
  );
};

export default App;
