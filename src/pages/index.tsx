import cx from "classnames";
import * as React from "react";
import { Link } from "gatsby";

export default () => {
  return (
    <main className={cx("pt-16", "ml-auto", "mr-auto", "min-h-ios")}>
      <div
        className={cx("relative")}
        style={{
          height: `calc(100vh - 68px)`,
        }}
      >
        <div
          className={cx(
            "absolute",
            "bottom-0",
            "left-1/2",
            "transform",
            "-translate-x-1/2",
            "z-20",
            "max-w-screen-xl",
            "w-full",
            "px-4"
          )}
        >
          <div className={cx("py-20")}>
            <div className={cx("text-white", "font-display", "text-sm")}>
              Architecture
            </div>
            <h2
              className={cx(
                "font-display",
                "font-bold",
                "text-5xl",
                "text-white",
                "py-2"
              )}
            >
              Project name
            </h2>
            <Link
              className={cx(
                "font-display",
                "font-bold",
                "text-base",
                "text-yellow-600"
              )}
              to="/"
            >
              Read more
            </Link>
          </div>
        </div>
        <div
          className={cx(
            "bottomHeroGradient",
            "z-10",
            "w-full",
            "h-64",
            "absolute",
            "left-0",
            "bottom-0"
          )}
        />
        <div
          className={cx(
            "absolute",
            "top-0",
            "left-0",
            "z-0",
            "w-full",
            "h-full",
            "bg-center",
            "bg-cover",
            "bg-no-repeat"
          )}
          style={{
            backgroundImage: `url(
              https://res.cloudinary.com/hkpimi495/image/upload/c_scale,w_1440/v1588529790/Q_ubgwgk.jpg
            )`,
          }}
        />
      </div>
    </main>
  );
};
