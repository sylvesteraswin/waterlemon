import * as React from "react";

export interface BareMinimum<P = any> {
  /** The className applied to the root container. */
  className?: string;
  /** Override style applied to the root container. */
  style?: React.CSSProperties;
  /** Set the tagName of the `root` container. This feature may not be available for all components. */
  tag?: React.ElementType<P>;
}

export type StandardProps<C, Removals extends keyof C = never> = Omit<
  C,
  Removals
> &
  BareMinimum<C>;

export enum BaseTags {
  INLINE_BASE = "span",
  BASE = "div",
  IMG = "img",
  LINK = "a",
  BUTTON = "button",
}

export interface PropTypes<P = any> {
  tag?: React.ElementType<P>;
  src?: string;
  href?: string;
  type?: "button" | "reset" | "submit";
}

export function getElementType<
  P extends BareMinimum,
  K extends PropTypes = any
>(
  Component: React.ComponentType<P>,
  props: K,
  getDefault?: (...args: any[]) => React.ElementType<P>
): React.ElementType {
  const { defaultProps } = Component;
  let componentTag: React.ElementType = BaseTags.BASE;
  if (defaultProps !== undefined) {
    const { tag = BaseTags.BASE } = defaultProps;
    if (tag !== undefined) {
      componentTag = tag;
    }
  }

  const { tag: propTag, src: propSrc, href: propHref, type } = props;

  // Compute default element type
  if (getDefault !== undefined) {
    componentTag = getDefault();
  }

  // Use the tag which was passed as props
  if (propTag !== undefined && propTag !== componentTag) {
    return propTag;
  }

  // infer image srd
  if (propSrc !== undefined) {
    return BaseTags.IMG;
  }

  // infer anchor links
  if (propHref) {
    return BaseTags.LINK;
  }

  // infer the button type
  // https://www.w3schools.com/tags/att_button_type.asp
  const TYPE_DEFAULTS = ["button", "submit", "reset"];
  if (type !== undefined && TYPE_DEFAULTS.includes(type)) {
    return BaseTags.BUTTON;
  }

  return componentTag;
}
