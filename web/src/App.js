import React, { useState } from 'react';

import Routes from "./routes"
import {GlobalStyle} from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <Routes/>
      <GlobalStyle/>
    </>
  );
}

export default App;