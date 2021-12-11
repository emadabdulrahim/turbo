import * as React from "react";
import { styled, theme } from "../theme";
import { BoxProps } from "../types";
import { Box } from "./Box";

const _VStack = styled(Box, {
  "> * + *": {
    marginTop: "$$vStackSpace",
  },
});

type VStackProps = {
  space: keyof typeof theme["space"];
} & BoxProps;

export const VStack = React.forwardRef<HTMLDivElement, VStackProps>(
  ({ space, css = {}, ...rest }: VStackProps) => {
    return (
      <_VStack css={{ $$vStackSpace: theme.space[space], ...css }} {...rest} />
    );
  }
);
