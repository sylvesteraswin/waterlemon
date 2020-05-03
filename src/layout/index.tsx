import * as React from "react";

import { StandardProps } from "../utils/element-types";

interface LayoutProps
  extends StandardProps<React.HtmlHTMLAttributes<HTMLDivElement>> {}

import Header from "../components/Header";

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className={"relative"}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
