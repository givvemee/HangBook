import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Hanging out with Books" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
