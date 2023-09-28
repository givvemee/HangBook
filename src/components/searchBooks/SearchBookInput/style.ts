import { styled } from "styles/stitches.config";

export const SearchForm = styled("form", {
  maxWidth: "450px",
  position: "relative",
  margin: "20px auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
});

export const SearchInput = styled("input", {
  width: "400px",
  height: "40px",
  borderRadius: "20px",
  paddingLeft: "45px",
  fontFamily: "$noto",
  boxShadow: "2px 4px 16px 3px rgba(191, 191, 191, 0.78)",
  outline: "none",
  border: "none",
  "&::placeholder": { fontFamily: "$noto" },
});

export const SearchIcon = styled("div", {
  height: "100%",
  display: "flex",
  alignItems: "center",
  fontSize: "30px",
  cursor: "pointer",
});
