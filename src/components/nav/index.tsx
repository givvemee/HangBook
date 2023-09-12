'use client';
import { usePathname } from 'next/navigation';
import { NAV_LIST } from './init';
import { Arrow, MenuLink, MenuList, NavContainer, NavListWrap } from './style';

const Nav = () => {
  const pathname = usePathname();
  console.log();
  return (
    <NavContainer>
      <nav>
        <NavListWrap>
          {NAV_LIST.map((item, index) => (
            <MenuList key={index}>
              <MenuLink
                href={`${process.env.NEXT_PUBLIC_URI}/${item.path}`}
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
