'use client';
import { useEffect, useState } from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { IoMdRefreshCircle } from 'react-icons/io';
import styled from 'styled-components';
import { quotes } from '../common/Quotes';

const QuoteWrap = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #a5a5a5;
  & > p {
    font-size: 14px;
    font-style: italic;
    font-weight: bold;
    & > svg {
      font-size: 12px;
    }
  }
  & > div {
    font-size: 12px;
    display: flex;
    justify-content: center;
    line-height: 20px;
  }
`;
const QuoteRefresh = styled.button`
  font-size: 20px;
  background: none;
  border: 0;
  cursor: pointer;
  color: ${(props) => props.theme.textColor};
`;

const ShowQuotes = () => {
  const [quote, setQuote] = useState(quotes[0].quote);
  const [author, setAuthor] = useState(quotes[0].author);

  useEffect(() => {
    const randomQuote = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomQuote].quote);
    setAuthor(quotes[randomQuote].author);
  }, []);
  const clickToNew = () => {
    const randomQuote = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomQuote].quote);
    setAuthor(quotes[randomQuote].author);
  };

  return (
    <QuoteWrap>
      <p>
        <FaQuoteLeft /> {quote} <FaQuoteRight />
      </p>
      <div>
        <p> - {author}</p>
        <p>
          <QuoteRefresh onClick={clickToNew}>
            <IoMdRefreshCircle />
          </QuoteRefresh>
        </p>
      </div>
    </QuoteWrap>
  );
};

export default ShowQuotes;
