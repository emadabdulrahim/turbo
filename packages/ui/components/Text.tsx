import { styled } from "../theme";

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
        fontSize: "$1",
      },
      2: {
        fontSize: "$2",
        color: "$textMuted",
      },
      3: {
        fontSize: "$3",
      },
      4: {
        fontSize: "$4",
      },
      5: {
        fontSize: "$5",
      },
    },
  },

  defaultVariants: {
    font: "mono",
    size: "4",
  },
});
