import React, { useRef, useState } from 'react';

const SearchBookInput = ({searching}) => {
    const textRef = useRef()
    const [ text , setText ] = useState('')

    const onSubmit = (e) => {
        e.preventDefault() 
        if (!text) return;
        // text 를 전달
        searching(text)
        setText('')
        textRef.current.focus()
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="책 제목을 입력하세요." value={ text } onChange={ e => setText( e.target.value) } ref={textRef}/>
            <button type="submit">찾기</button>
        </form>
    );
};

export default SearchBookInput;