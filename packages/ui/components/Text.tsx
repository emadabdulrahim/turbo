import { styled } from "../theme";
import { generateVariantsFromThemeTokens } from "../theme/utils";

const variants = generateVariantsFromThemeTokens<"fontSizes">(
  "fontSizes",
  "fontSize"
);

export const Text = styled("p", {
  fontSize: "$4",
  color: "$textDefault",
  lineHeight: "$body",
  fontWeight: "$body",
  letterSpacing: "$body",

  variants: {
    font: {
      serif: {
        fontFamily: "$primary",
      },
      mono: {
        fontFamily: "$mono",
      },
    },
    size: {
      1: {
        ...variants["1"],
      },
      2: {
        ...variants["2"],
        color: "$textMuted",
      },
      3: {
        ...variants["3"],
      },
      4: {
        ...variants["4"],
      },
      5: {
        ...variants["5"],
      },
    },
  },

  defaultVariants: {
    font: "mono",
    size: "4",
  },
});
