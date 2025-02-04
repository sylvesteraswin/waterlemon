import cx from "classnames";
import * as React from "react";
import { Link } from "gatsby";

import { StandardProps } from "../utils/element-types";

import SocialMedia from "../components/SocialMedia";

interface HeaderProps
  extends StandardProps<React.HtmlHTMLAttributes<HTMLDivElement>> {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <header
      className={cx("fixed", "z-50", "top-0", "left-0", "bg-black", "w-full")}
    >
      <div className={cx("w-full", "px-8", "ml-auto", "mr-auto", "flex")}>
        <div className={cx("flex-grow", "py-4")}>
          <Link to="/" className={cx("inline-block")}>
            <img
              src="https://res.cloudinary.com/hkpimi495/image/upload/v1588528027/Logo_for_web_mtal4n.png"
              alt="Waterlemon studios"
            />
          </Link>
        </div>
        <div className={cx("flex", "justify-end", "py-4", "items-center")}>
          <Link
            to="/"
            className={cx(
              "inline-block",
              "font-display",
              "text-white",
              "text-sm",
              "border-b-2",
              "duration-300",
              "ease-in-out",
              "transition-colors",
              "border-solid",
              "border-transparent",
              "hover:border-white"
            )}
          >
            Home
          </Link>
          <SocialMedia className={"ml-4"} />
        </div>
      </div>
    </header>
  );
};

export default Header;
