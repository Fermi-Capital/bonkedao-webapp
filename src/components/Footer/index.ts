import { styled } from "@app/stitches.config";

const Footer = styled("footer", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "120px",
  flexDirection: "column",
  backgroundColor: "$yellow",
  width: "100%",
  padding: "50px 0",
  marginTop: "-50px",

  clipPath: "ellipse(70% 100% at 50% 100%)",
});

export default Footer;
