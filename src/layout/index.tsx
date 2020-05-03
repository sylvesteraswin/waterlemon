import * as React from "react";

import { StandardProps } from "../utils/element-types";

interface LayoutProps
  extends StandardProps<React.HtmlHTMLAttributes<HTMLDivElement>> {}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default Layout;
