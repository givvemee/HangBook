import Header from '@/components/header';
import Mode from '@/components/mode';
import Nav from '@/components/nav';
import Quotes from '@/components/quotes';
import { StyleSheet } from 'styles/StyleSheet';
import 'styles/reset.css';
import { FullWrap, LeftSide, MainBack, RightSide } from './style';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <body>
        <StyleSheet />
        <MainBack>
          <FullWrap>
            <LeftSide>
              <Header />
              <Nav />
              <Quotes />
            </LeftSide>
            <RightSide>{children}</RightSide>
          </FullWrap>
          <Mode />
        </MainBack>
      </body>
    </html>
  );
};

export default RootLayout;
