import { styled } from "../theme";
import { generateVariantsFromThemeTokens, Variant } from "../theme/utils";
import { Box } from "./Box";

const spaceVariants = generateVariantsFromThemeTokens<"space">(
  "space",
  "marginTop"
);

const getVStackVariantsStylesFromObject = (spaceVariants: Variant<"space">) => {
  const result = Object.keys(spaceVariants).reduce((accum, key) => {
    accum[key] = {
      "> * + *": {
        ...spaceVariants[key],
      },
    };

    return accum;
  }, {});

  return result;
};

export const VStack = styled(Box, {
  variants: {
    space: getVStackVariantsStylesFromObject(spaceVariants) as Variant<"space">,
  },
});
