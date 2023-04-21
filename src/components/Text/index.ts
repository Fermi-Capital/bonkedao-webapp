import { styled } from "@app/stitches.config";
import type * as Stitches from "@stitches/react";

const sharedTypography: Stitches.CSS = {
  fontFamily: "$default",
};
const Text = styled(
  "span",
  {
    variants: {
      size: {
        h0: { fontSize: "$7" },
        h1: { fontSize: "$6" },
        h2: { fontSize: "$5", lineHeight: "42.96px" },
        h3: { fontSize: "$4" },
        h4: { fontSize: "$3" },
        h5: { fontSize: "$2" },
        text: { fontSize: "$4", lineHeight: "23.87px" },
      },
      weight: {
        light: { fontWeight: "$4" },
        regular: { fontWeight: "$6" },
        medium: { fontWeight: "$7" },
        bold: { fontWeight: "$8" },
      },
      color: {
        pink: { color: "$pink" },
        blue: { color: "$blueJean" },
        yellow: { color: "$yellow" },
        dark: { color: "$blackSlate" },
        gray: { color: "$gray" },
      },
      mono: {
        true: { fontFamily: "$mono" },
      },
      align: {
        left: { textAlign: "left" },
        center: { textAlign: "center" },
        right: { textAlign: "right" },
      },
      verticalAlign: {
        top: { verticalAlign: "top" },
        middle: { verticalAlign: "middle" },
        bottom: { verticalAlign: "bottom" },
      },
      px: {
        1: { paddingLeft: "$1", paddingRight: "$1" },
        2: { paddingLeft: "$2", paddingRight: "$2" },
        3: { paddingLeft: "$3", paddingRight: "$3" },
        4: { paddingLeft: "$4", paddingRight: "$4" },
        5: { paddingLeft: "$5", paddingRight: "$5" },
        6: { paddingLeft: "$6", paddingRight: "$6" },
      },
      pb: {
        1: { paddingBottom: "$1" },
        2: { paddingBottom: "$2" },
        3: { paddingBottom: "$3" },
        4: { paddingBottom: "$4" },
        5: { paddingBottom: "$5" },
        6: { paddingBottom: "$6" },
      },
    },
    defaultVariants: {
      size: "text",
      color: "gray",
      weight: "regular",
      align: "left",
    },
  },
  sharedTypography
);

export default Text;
