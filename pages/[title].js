import Head from 'next/head'
import styled from 'styled-components'
import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
} from '../components/sharedstyles'
import Cards from '../components/cards'
import useSWR from 'swr';
import Book from '../components/Book'
import {useRouter} from "next/router"


//function to fetch a particular url and return the data as json
const fetcher = url => fetch(url).then(r=> r.json());

export default function BookDetails() {
    const router = useRouter(); // get access to our router object
    const {title} = router.query; //gives us access to the end of the url 
  //first parameter is the path of the api endpoint (what will be fetched)
  //second param is the fetcher function that executes to get the data
    const {data, error} = useSWR(`api/books/${title}`, fetcher);


  //if api encounters an error, this will render. 
  if (error){
    return <Main>Error!</Main>
  }

  //while data is loading
  if (!data){
    return <Main>Loading ... </Main>
  }

  console.log(data);

  //then this is the final/ideal rendering. if data comes back as expected
  return (
    <SingleBook>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BookWrapper>
        <Book title={data[0].title} author={data[0].author} pages={data[0].pages} link={data[0].link}/>
      </BookWrapper>
    </SingleBook>
  )
}

const SingleBook = styled.div`
  background-color: #9ccaff;
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: ". bookWrapper .";
`
const BookWrapper=styled.div`
grid-area:bookWrapper;
padding: 10px;
`