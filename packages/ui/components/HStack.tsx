import { styled } from "../theme";
import { generateVariantsFromThemeTokens } from "../theme/utils";
import { Box } from "./Box";

const spaceVariants = generateVariantsFromThemeTokens<"space">("space", "gap");

export const HStack = styled(Box, {
  display: "flex",

  variants: {
    space: {
      ...spaceVariants,
    },
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
