import type * as Stitches from "@stitches/react";
import { theme } from "./index";

export type ThemeScales = keyof typeof theme;

type ThemeScaleFor<Scale extends ThemeScales> = keyof typeof theme[Scale];

export type Variant<Scale extends ThemeScales> = {
  [key in ThemeScaleFor<Scale>]: Stitches.CSS;
};

export const generateVariantsFromThemeTokens = <Scale extends ThemeScales>(
  scale: ThemeScales,
  cssProp: keyof Stitches.CSSProperties,
  callback?: (key: string, value: Stitches.CSS) => Stitches.CSS
): Variant<Scale> => {
  const variants = {} as Variant<Scale>;
  // use callback for more complex css rules
  Object.keys(theme[scale]).forEach((v) => {
    if (callback) {
      variants[v] = {
        ...callback(v, theme[scale][v].value),
      };
    } else {
      variants[v] = { [cssProp]: theme[scale][v].value };
    }
  });

  return variants;
};
