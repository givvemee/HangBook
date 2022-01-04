import React, { useEffect, useState } from 'react';
import { quotes } from '../common/Quotes';
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";


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
    }

    return (
        <div>
            <p><FaQuoteLeft />{quote} <FaQuoteRight/></p>
            <p> - {author}</p>
            <p>
                <button onClick={clickToNew}>Replace New</button>
            </p>
        </div>
    );
};

export default ShowQuotes;