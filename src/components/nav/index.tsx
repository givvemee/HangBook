import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import { NAV_LIST } from './init';
import { MenuList, NavContainer, NavListWrap } from './style';

const Nav = () => {
  return (
    <NavContainer>
      <nav>
        <NavListWrap>
          {NAV_LIST.map((item, index) => (
            <MenuList key={index}>
              <Link
                href={`${process.env.NEXT_PUBLIC_URI}/${item.path}`}
                // to={item.path}
                // style={{
                //   color: `${location.pathname === item.path ? '#666' : '#ccc'}`,
                //   fontWeight: `${
                //     location.pathname === item.path ? 'bold' : 'normal'
                //   }`,
                //   fontSize: `${
                //     location.pathname === item.path ? '18px' : '16px'
                //   }`,
                // }}
              >
                <p>{item.tap}</p>
                <IoIosArrowForward />
              </Link>
            </MenuList>
          ))}
        </NavListWrap>
      </nav>
    </NavContainer>
  );
};

export default Nav;
