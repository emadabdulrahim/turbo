import * as React from "react";
import { BoxProps } from "~/types";
import { styled, theme } from "../theme";
import { Box } from "./Box";

const _ElasticGrid = styled(Box, {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(min($$GridSpace, 100%), 1fr))",
});

type ElasticGridProps = {
  space: keyof typeof theme["space"];
} & BoxProps;

export const ElasticGrid = React.forwardRef<HTMLDivElement, ElasticGridProps>(
  ({ space, ...rest }: ElasticGridProps) => {
    return <_ElasticGrid css={{ $$GridSpace: theme.space[space] }} {...rest} />;
  }
);
