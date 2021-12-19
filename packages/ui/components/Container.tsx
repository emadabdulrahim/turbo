import { styled } from "../theme";
import { Box } from "./Box";

export const Container = styled(Box, {
  mx: "auto",
  px: "$5",

  variants: {
    size: {
      column: {
        maxWidth: "600px",
      },
      default: {
        maxWidth: "840px",
      },
      wide: {
        maxWidth: "1200px",
      },
    },
  },
});
