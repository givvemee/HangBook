import { Metadata } from 'next';

import Header from '@/components/header';
import Mode from '@/components/mode';
import Nav from '@/components/nav';
import Quotes from '@/components/quotes';
import { resetCss } from 'styles/reset';
import { getCssText } from 'styles/stitches.config';
import { FullWrap, LeftSide, MainBack } from './style';

export default function Page() {
  resetCss();
  return (
    <>
      <style>{getCssText()}</style>

      <MainBack>
        <FullWrap>
          <LeftSide>
            <Header />
            <Nav />
            <Quotes />
          </LeftSide>
        </FullWrap>
        <Mode />
      </MainBack>
    </>
  );
}

export const metadata: Metadata = {
  title: 'HangBook',
  description: 'Hanging out with Books',
};

// export const Page = () => {
//   return (
//     <>
{
  /* <ThemeProvider theme={theme}> */
}
{
  /* <MainBack> */
}
{
  /* <ThemeChange
            title={theme === lightMode ? '🌚' : '🌝'}
            clickToModeChange={toggleTheme}
          /> */
}
{
  /* <HashRouter> */
}
{
  /* <FullWrap>
          <Header />❌
          <div> */
}
{
  /* <Switch>
                  <Route path="/" component={Today} exact />
                  <Route path="/bestSellers" component={BestSellerMain} />
                  <Route path="/searchBooks" component={SearchBookMain} />
                </Switch> */
}
{
  /* </div> */
}
{
  /* </FullWrap> */
}
{
  /* </HashRouter> */
}
{
  /* </MainBack> */
}
{
  /* </ThemeProvider> */
}
{
  /* </>
  );
}; */
}
