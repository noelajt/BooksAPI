import styled from 'styled-components'
export default function Book({title, author, pages, link}){
    return <BookWrapper style={{ backgroundColor: getRandomColor()}}>
        <Spine></Spine>
        <BookInfo>
            <h1>{title}</h1>
            <h2>by {author}</h2>
            <p>Number of Pages: {pages}</p>
            <a href={link}>Learn More</a>
        </BookInfo>
    </BookWrapper>
}

function getRandomColor() {
    const colors = ['#9adedb', ' #bdb0d0 ', '#bee7a5', '#ffb7ce', '#ff9899', '#aeebe7', '#f7d7f0', '#dce897'];
    const index = Math.floor(Math.random() * colors.length);
    const color = colors[index];
  
    return color;
}

const BookWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
  grid-template-rows: auto;
  grid-template-areas: "spine bookinfo";
  position: relative;

  max-height: 400px;
  max-width: 225px;
  min-width: 180px;
  border: 2px solid black;
  border-radius: 5px;
  font-size: clamp(14px, 1.5vw, 18px);
`

const BookInfo = styled.article`
  grid-area: bookinfo;
  padding: 15px;
`

const Spine = styled.article`
  grid-area: spine;
  background-color: #9e7f67;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 25px;
  border-radius: 2px 0 0 2px;
`
  