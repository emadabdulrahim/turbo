import { styled } from "../theme";
import { generateVariantsFromThemeTokens } from "../theme/utils";

const variants = generateVariantsFromThemeTokens<"fontSizes">(
  "fontSizes",
  "fontSize"
);

export const Heading = styled("h2", {
  fontSize: "$4",
  color: "$textHeading",
  lineHeight: "$heading",
  fontWeight: "$body",
  letterSpacing: "$heading",

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
      ...variants,
      1: {
        textTransform: "uppercase",
        letterSpacing: "$caps",
        fontWeight: "$medium",
        color: "$textDefault",
      },
      2: {
        color: "$textDefault",
        fontWeight: "$medium",
        letterSpacing: "$body",
      },
    },
  },

  defaultVariants: {
    font: "serif",
    size: "7",
  },
});
