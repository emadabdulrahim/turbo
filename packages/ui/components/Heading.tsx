import { styled } from "../theme";

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
      1: {
        fontSize: "$1",
        textTransform: "uppercase",
        letterSpacing: "$caps",
        fontWeight: "$medium",
        color: "$textDefault",
      },
      2: {
        fontSize: "$2",
        color: "$textDefault",
        fontWeight: "$medium",
        letterSpacing: "$body",
      },
      3: {
        fontSize: "$3",
        letterSpacing: "$body",
      },
      4: {
        fontSize: "$4",
      },
      5: {
        fontSize: "$5",
      },
      6: {
        fontSize: "$6",
      },
      7: {
        fontSize: "$7",
      },
      8: {
        fontSize: "$8",
      },
      9: {
        fontSize: "$9",
      },
    },
  },

  defaultVariants: {
    font: "serif",
    size: "7",
  },
});
