import React from "react";
import { render as rtlRender } from "@testing-library/react";
import GlobalStyle from "../styles/GlobalStyle";
import Theme from "../styles/Theme";

export const customRender = (ui) => {
  const Wrapper = ({ children }) => {
    return (
      <Theme>
        <GlobalStyle />
        {children}
      </Theme>
    );
  };
  return rtlRender(ui, { wrapper: Wrapper });
};
