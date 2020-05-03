import { withPrefix } from "gatsby";
import * as React from "react";

export interface HtmlProps {
  body: string;
  htmlAttributes: Record<string, any>;
  bodyAttributes: Record<string, any>;
  preBodyComponents: React.ReactNodeArray;
  postBodyComponents: React.ReactNodeArray;
  headComponents: React.ReactNodeArray;
}

export default function HTML({
  body,
  htmlAttributes,
  bodyAttributes,
  headComponents,
  preBodyComponents,
  postBodyComponents,
}: HtmlProps) {
  return (
    <html {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href={withPrefix("/favicon.png")}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {headComponents}
      </head>
      <body {...bodyAttributes} className={"bg-black"}>
        {preBodyComponents}
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        {postBodyComponents}
      </body>
    </html>
  );
}
