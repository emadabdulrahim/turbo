import React from "react";
import { styled } from "../theme";

export const Link = styled("a", {
  fontSize: "inherit",
  display: "inline",
  color: "currentColor",

  variants: {
    appearance: {
      inline: {
        color: "$textHeading",
      },
    },
  },
});

const _ExternalLink = styled("a", {
  fontSize: "inherit",
  display: "inline",
  color: "currentColor",

  variants: {
    appearance: {
      minimal: {
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline",
        },
      },
    },
  },
});

export const ExternalLink = (
  props: React.ComponentProps<typeof _ExternalLink>
) => {
  return (
    <_ExternalLink target='_blank' rel='noreferrer noopener' {...props}>
      {props.children}
    </_ExternalLink>
  );
};
