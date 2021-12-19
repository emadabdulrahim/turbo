import { styled } from "../theme";
import { generateVariantsFromThemeTokens } from "../theme/utils";
import { Box } from "./Box";

// TODO: This shouldn't read from scale, we should be able to pass pixel value (min width of item in grid)
const variants = generateVariantsFromThemeTokens<"space">(
  "space",
  "fontSize",
  (key, value) => ({
    [key]: {
      gridTemplateColumns: `repeat(auto-fill, minmax(min(${value}, 100%), 1fr))`,
    },
  })
);

export const ElasticGrid = styled(Box, {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(min($$GridSpace, 100%), 1fr))",
});
