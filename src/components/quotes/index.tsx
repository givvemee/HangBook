'use client';

import { useEffect, useState } from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { IoMdRefreshCircle } from 'react-icons/io';
import { QUOTES } from './quote';
import { QuoteRefresh, QuoteWrap } from './style';

const Quotes = () => {
  const [quote, setQuote] = useState(QUOTES[0].quote);
  const [author, setAuthor] = useState(QUOTES[0].author);

  useEffect(() => {
    const randomQuote = Math.floor(Math.random() * QUOTES.length);
    setQuote(QUOTES[randomQuote].quote);
    setAuthor(QUOTES[randomQuote].author);
  }, []);

  const clickToNew = () => {
    const randomQuote = Math.floor(Math.random() * QUOTES.length);
    setQuote(QUOTES[randomQuote].quote);
    setAuthor(QUOTES[randomQuote].author);
  };

  return (
    <QuoteWrap>
      <p>
        <FaQuoteLeft /> {quote} <FaQuoteRight />
      </p>
      <div>
        <p className="author"> - {author}</p>
        <p>
          <QuoteRefresh onClick={clickToNew}>
            <IoMdRefreshCircle />
          </QuoteRefresh>
        </p>
      </div>
    </QuoteWrap>
  );
};

export default Quotes;
