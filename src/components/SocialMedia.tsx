import cx from "classnames";
import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { FiInstagram, FiTwitter } from "react-icons/fi";
import { Fa500Px } from "react-icons/fa";

import { StandardProps } from "../utils/element-types";

interface SiteMetaDataProps {
  site: {
    siteMetadata: {
      social: {
        instagram: string;
        twitter: string;
      };
    };
  };
}

interface SocialMediaProps
  extends StandardProps<React.HtmlHTMLAttributes<HTMLDivElement>> {}

const SocialMedia: React.FunctionComponent<SocialMediaProps> = ({
  className,
}) => {
  const {
    site: {
      siteMetadata: {
        social: { instagram, twitter, px500 },
      },
    },
  } = useStaticQuery<SiteMetaDataProps>(graphql`
    query SocialMediaQuery {
      site {
        siteMetadata {
          social {
            instagram
            twitter
          }
        }
      }
    }
  `);
  const socialMediaIcons = [
    { id: "instagram", icon: <FiInstagram />, href: instagram },
    { id: "twitter", icon: <FiTwitter />, href: twitter },
  ];
  return (
    <div
      className={cx(
        "flex",
        "flex-row",
        "justify-center",
        "items-center",
        className
      )}
    >
      {socialMediaIcons.map(({ id, icon, href }) => (
        <a
          rel="noopener noreferrer"
          key={id}
          href={href}
          target="_blank"
          className={cx(
            "p-2",
            "text-white",
            "text-base",
            "transition-transform",
            "transform",
            "duration-300",
            "scale-100",
            "hover:scale-110"
          )}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
