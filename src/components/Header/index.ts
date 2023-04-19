import { styled } from "@app/stitches.config";

const Header = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "25px",
  backgroundColor: "$transparent",
  borderBottom: "2px solid $blackSlate",
  padding: "$4 $4",
});

export default Header;
