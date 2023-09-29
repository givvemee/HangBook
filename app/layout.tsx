"use client";

import Header from "@/components/header";
import Mode from "@/components/mode";
import Nav from "@/components/nav";
import Quotes from "@/components/quotes";
import { useState } from "react";
import { useStore } from "store";
import "styles/reset.css";
import { darkTheme } from "styles/stitches.config";
import { FullWrap, LeftSide, MainBack, RightSide } from "./style";
import { ServerStylesheet } from "styles/StyleSheet";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode } = useStore();

  return (
    <html lang="ko">
      <body>
        <ServerStylesheet>
          <div className={!isDarkMode ? darkTheme : ""}>
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
          </div>
        </ServerStylesheet>
      </body>
    </html>
  );
};

export default RootLayout;
