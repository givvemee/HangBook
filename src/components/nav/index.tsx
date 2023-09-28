"use client";
import { usePathname, useRouter } from "next/navigation";
import { NAV_LIST } from "./init";
import { Arrow, MenuLink, MenuList, NavContainer, NavListWrap } from "./style";

const Nav = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <NavContainer>
      <nav>
        <NavListWrap>
          {NAV_LIST.map((item, index) => (
            <MenuList key={index}>
              <MenuLink
                onClick={() => router.push(item.path)}
                isActive={pathname === item.path}
              >
                <span>{item.tap}</span>
                <Arrow />
              </MenuLink>
            </MenuList>
          ))}
        </NavListWrap>
      </nav>
    </NavContainer>
  );
};

export default Nav;
