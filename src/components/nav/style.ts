import { IoIosArrowForward } from "react-icons/io";
import { styled } from "styles/stitches.config";

export const NavContainer = styled("nav", {
  width: "100%",
});

export const NavListWrap = styled("ul", {
  display: "flex",
  flexDirection: "column",
});

export const MenuList = styled("li", {
  height: "80px",
  fontSize: "20px",
  listStyle: "none",
  fontWeight: "600",
  paddingRight: "10px",
});

export const MenuLink = styled("p", {
  color: "#AAA",
  cursor: "pointer",
  textDecoration: "none",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  span: {
    fontFamily: "$montserrat",
  },

  variants: {
    isActive: {
      true: {
        color: "$subText",
      },
      false: {
        color: "$inactiveText",
      },
    },
  },
});

export const Arrow = styled(IoIosArrowForward, {});
