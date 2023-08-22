import { IoIosArrowForward } from 'react-icons/io';
import styled from 'styled-components';

const navList = [
  { id: 1, tap: "Today's Book", path: '/' },
  { id: 2, tap: 'Best Sellers', path: '/bestSellers' },
  { id: 3, tap: 'Search Books', path: '/searchBooks' },
];

const NavCont = styled.nav`
  width: 100%;
  position: absolute;
  top: 45%;
  transform: translateY(-50%);
`;
const MenuListWrap = styled.ul`
  display: flex;
  flex-direction: column;
`;
const MenuList = styled.li`
  height: 80px;

  a {
    color: #aaa;
    text-decoration: none;
    line-height: 80px;
    display: flex;
    justify-content: space-between;
    border-bottom: #a5a5a5;
    & > svg {
      font-weight: bold;
      height: 80px;
    }
    &:focus {
      font-weight: 900;
    }
  }
`;
const Nav = () => {
  const location = useLocation();

  return (
    <NavCont>
      <nav>
        <MenuListWrap>
          {navList.map((item, index) => (
            <MenuList key={index}>
              <Link
                to={item.path}
                style={{
                  color: `${location.pathname === item.path ? '#666' : '#ccc'}`,
                  fontWeight: `${
                    location.pathname === item.path ? 'bold' : 'normal'
                  }`,
                  fontSize: `${
                    location.pathname === item.path ? '18px' : '16px'
                  }`,
                }}
              >
                <p>{item.tap}</p>
                <IoIosArrowForward />
              </Link>
            </MenuList>
          ))}
        </MenuListWrap>
      </nav>
    </NavCont>
  );
};

export default Nav;
