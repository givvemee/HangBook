import { Head, HeadWrap, HeaderTitle } from "./style";

const Header = () => {
  return (
    <HeadWrap>
      <Head>
        <HeaderTitle>
          📚 <span>HangBook</span>,<br /> Hanging out with Books
        </HeaderTitle>
      </Head>
    </HeadWrap>
  );
};

export default Header;
