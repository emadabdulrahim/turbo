import type * as Stitches from "@stitches/react";
import * as React from "react";
import { BoxProps } from "~/types";
import { styled, theme } from "../theme";
import { Box } from "./Box";

const _HStack = styled(Box, {
  display: "flex",
  gap: "$$HStackSpace",

  variants: {
    wrap: {
      true: {
        flexWrap: "wrap",
      },
    },
    nowrap: {
      true: {
        flexWrap: "nowrap",
      },
    },
  },

  defaultVariants: {
    wrap: true,
  },
});

type HStackProps = {
  space: keyof typeof theme["space"];
} & Stitches.VariantProps<typeof _HStack> &
  BoxProps;

export const HStack = React.forwardRef<HTMLDivElement, HStackProps>(
  ({ space, wrap, ...rest }, ref) => {
    return (
      <_HStack
        ref={ref}
        css={{ $$HStackSpace: theme.space[space] }}
        {...rest}
      />
    );
  }
);
