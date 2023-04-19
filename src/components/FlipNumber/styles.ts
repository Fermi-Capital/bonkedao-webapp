import { styled } from "@app/stitches.config";
import { CSSProperties } from "@stitches/react";

export const FlipWrapper = styled("div", {
  backgroundImage: "url('/images/number-flip-bg.svg')",
  backgroundSize: "cover",
  margin: "0 0.3vw",
  width: "4.5vw",
  height: "7.5vw",
  maxWidth: "70px",
  maxHeight: "118px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textShadow: "2px 4px 0px rgba(0, 0, 0, 0.25)",
});

export const FlipNumberStyles: CSSProperties = {
  fontFamily: "Impact, SF UI Display, sans-serif",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "clamp(12px, 4vw, 58px)",
  color: "white",
  paddingLeft: "-0.5vw",
  textShadow: "2px 4px 0px rgba(0, 0, 0, 0.25)",
};

export const commaStyles: CSSProperties = {
  margin: "2.5vw 0.4vw 0 0.4vw",
  width: "1vw",
};
