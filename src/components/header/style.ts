import { styled } from "../../../styles/stitches.config";

export const HeadWrap = styled("div", {
  width: "80%",
  height: "calc(100%- 200px)",
  margin: "0 auto",
  position: "relative",
});

export const Head = styled("header", {
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  fontFamily: "$montserrat",
});

export const HeaderTitle = styled("h1", {
  display: "inline-block",
  fontSize: "20px",
  textAlign: "center",
  height: "auto",
  fontFamily: "$montserrat",
  fontWeight: "400",
  color: "$text",
  span: {
    fontStyle: "italic",
    fontSize: "24px",
    fontFamily: "$montserrat",
    fontWeight: "600",
  },
});
