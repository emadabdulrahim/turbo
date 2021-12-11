import {
  blue,
  orange,
  orangeDarkA,
  red,
  redDark,
  sand,
  sandDark,
} from "@radix-ui/colors";
import type * as Stitches from "@stitches/react";
import { createStitches, createTheme } from "@stitches/react";

type SpaceValue = Stitches.ScaleValue<"space"> | "auto" | number;

export const { styled, getCssText, css, theme, globalCss, keyframes } =
  createStitches({
    theme: {
      fonts: {
        primary: "adobe-garamond-pro, -apple-system, sans-serif",
        secondary: "ar-gr, -apple-system, sans-serif",
        mono: "founders-mono, monospace",
      },
      colors: {
        ...orangeDarkA,
        ...redDark,
        ...sandDark,
        primary: "$orangeA9",

        /************ Text Colors ************/
        textHeading: "$sand12",
        textDefault: "$sand11",
        textMuted: "$sand8",
        textLight: "$sand7",
        link: blue.blue9,

        /************ Intent Colors ************/
        error: "$red9",
        success: "$orangeA9",

        /************ Border Colors ************/
        border: "$sand5",
        borderMuted: "$sand3",

        /************ Background Colors ************/
        bgTint1: "hsl(32, 12%, 6%)",
        bgTint2: "$sand2",
        bgTint3: "$sand3",

        white: "#fff",
        black: "#000",
      },
      shadows: {
        focus: "0 0 0 3px $colors$orangeA4",
        mutedFocus: "rgb(0 0 0 / 18%) 0px 0px 0px 4px",
        elevation1:
          "0 0 1px rgba(0, 0, 0, 0.35), 0px 0.3px 0.5px -4px rgba(0, 0, 0, 0.06), 0px 0.9px 1.8px -4px rgba(0, 0, 0, 0.06), 0px 4px 4px -4px rgba(0, 0, 0, 0.22)",
        elevation2:
          "0 0 1px rgba(0, 0, 0, 0.35), 0px 0.4px 0.7px -6px rgba(0, 0, 0, 0.052), 0px 1px 1.9px -6px rgba(0, 0, 0, 0.075), 0px 2.4px 4.5px -6px rgba(0, 0, 0, 0.098), 0px 8px 15px -6px rgba(0, 0, 0, 0.3)",
        elevation3:
          "0 0 1px rgba(0, 0, 0, 0.35), 0px 0.4px 0.2px -6px rgba(0, 0, 0, 0.053),0px 1px 0.8px -6px rgba(0, 0, 0, 0.075),0px 2.1px 1.9px -6px rgba(0, 0, 0, 0.095),0px 4.4px 4.5px -6px rgba(0, 0, 0, 0.117),0px 12px 18px -6px rgba(0, 0, 0, 0.4)",
      },
      space: {
        1: "0.125rem",
        2: "0.25rem",
        3: "0.5rem",
        4: "0.75rem",
        5: "1rem",
        6: "1.5rem",
        7: "2rem",
        8: "3rem",
        9: "4rem",
        10: "6rem",
        11: "8rem",
        12: "12rem",
      },
      fontSizes: {
        1: "0.75rem",
        2: "0.875rem",
        3: "1rem",
        4: "1.125rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.875rem",
        8: "2.25rem",
        9: "4rem",
      },
      fontWeights: {
        heading: 600,
        medium: 500,
        body: 400,
      },
      lineHeights: {
        title: 1.15,
        heading: 1.25,
        body: 1.5,
      },
      letterSpacings: {
        body: "-0.008em",
        caps: "0.06em",
      },
      radii: {
        1: "4px",
        2: "8px",
        round: "9999px",
      },
    },
    utils: {
      p: (value: SpaceValue) => ({
        paddingTop: value,
        paddingBottom: value,
        paddingLeft: value,
        paddingRight: value,
      }),
      pt: (value: SpaceValue) => ({
        paddingTop: value,
      }),
      pr: (value: SpaceValue) => ({
        paddingRight: value,
      }),
      pb: (value: SpaceValue) => ({
        paddingBottom: value,
      }),
      pl: (value: SpaceValue) => ({
        paddingLeft: value,
      }),
      px: (value: SpaceValue) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value: SpaceValue) => ({
        paddingTop: value,
        paddingBottom: value,
      }),

      m: (value: SpaceValue) => ({
        marginTop: value,
        marginBottom: value,
        marginLeft: value,
        marginRight: value,
      }),
      mt: (value: SpaceValue) => ({
        marginTop: value,
      }),
      mr: (value: SpaceValue) => ({
        marginRight: value,
      }),
      mb: (value: SpaceValue) => ({
        marginBottom: value,
      }),
      ml: (value: SpaceValue) => ({
        marginLeft: value,
      }),
      mx: (value: SpaceValue | "auto") => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value: SpaceValue) => ({
        marginTop: value,
        marginBottom: value,
      }),

      ta: (value: string) => ({ textAlign: value }),
      lg: (value: string) => ({
        backgroundImage: `linear-gradient(to right, ${value})`,
      }),
    },
  });

export const lightTheme = createTheme("dark-theme", {
  colors: {
    ...orange,
    ...sand,
    ...red,
    red9: "#EB4B53",
    primary: "$orange9",

    /************ Text Colors ************/
    textHeading: "hsl(0, 0%, 100% / 0.93)",
    textDefault: "hsl(0, 0%, 100% / 0.66)",
    textMuted: "hsl(0, 0%, 100% / 0.45)",
    link: blue.blue9,

    /************ Intent Colors ************/
    error: "$red9",
    success: "$green9",

    /************ Border Colors ************/
    border: "$sand5",
    borderMuted: "$sand3",

    /************ Background Colors ************/
    bgTint1: "#100f0d",
    bgTint2: "$sand2",
    bgTint3: "$sand3",
  },
});

export const globalStyles = globalCss({
  html: {
    fontSize: "100%",
    lineHeight: "$body",
    textRendering: "optimizeLegibility",
    WebkitTapHighlightColor: "transparent",
  },
  body: {
    background: "$bgTint1",
    fontFamily: "$mono",
    color: "$textDefault",
  },
});
