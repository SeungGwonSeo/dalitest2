import React from "react";
import GlobalStyles from "./GlobalStyled";
import {hot} from 'react-hot-loader';
import MainContents from "./MainContents";


const App = () => (
  <>
    <MainContents />
    <GlobalStyles />
  </>
);

export default hot(module)(App);