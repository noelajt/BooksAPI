import styled from 'styled-components'
import Book from "./Book"
export default function BookList({books}){
    return <BookWrapper>
        {books.map(b => <Book title={b.title} author={b.author} pages={b.pages} link={b.link}/>) }
    </BookWrapper>
}

const BookWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;

`