import { createStitches } from "@stitches/react";

export const { styled, getCssText, createTheme, theme } = createStitches({
  theme: {
    colors: {
      blueJean: "#9EC1FA",
      teal: "#A1F7FF",
      purple: "#BDB2FF",
      lime: "#BFFFB2",
      brown: "#C29D69",
      yellow: "#FEFA9F",
      red: "#FF7867",
      pink: "#FFA9C4",
      orange: "#FFC864",
      blackSlate: "#303030",
      gray: "#e0e0e0",
    },
    space: {
      1: "5px",
      2: "10px",
      3: "12px",
      4: "14px",
      5: "16px",
      6: "18px",
    },
    // fontSizes: {
    //   1: "12px",
    //   2: "14px",
    //   3: "16px",
    //   4: "20px",
    //   5: "36px",
    //   6: "60px",
    //   7: "250px",
    // },
    // 250/16=15.625
    // 60/16=3.75
    // 36/16=2.25
    // 20/16=1.25

    fontSizes: {
      1: "0.75rem",
      2: "0.87rem",
      3: "1rem",
      4: "1.25rem",
      5: "2.25rem",
      6: "3.75rem",
      7: "15.625rem",
    },
    fonts: {
      default: "SF UI Display, sans-serif",
      mono: "Söhne Mono, menlo, monospace",
    },
    radii: {
      1: "3px",
      2: "5px",
      3: "10px",
    },
    fontWeights: {
      4: 400,
      5: 500,
      6: 600,
      7: 700,
      8: 800,
    },
    media: {
      bp1: "(min-width: 768px)",
      bp2: "(min-width: 1024px)",
      bp3: "(min-width: 1280px)",
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
});

export const darkTheme = createTheme("dark-theme", {
  colors: {},
  space: {},
  fonts: {},
});
