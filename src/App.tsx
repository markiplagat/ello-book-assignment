import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import ReadingList from "./components/ReadingList";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { CircularProgress } from "@mui/material";
import NoData from "./components/NoData";

const BOOKS_QUERY = gql`
  query Books {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;

interface Book {
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
  title: string;
}

const App: React.FC = () => {
  loadDevMessages();
  loadErrorMessages();
  const { loading, error, data } = useQuery(BOOKS_QUERY);
  const [books, setBooks] = useState<Book[]>([]);
  const [searchResults, setSearchResults] = useState<Book[]>([]);
  console.log(data);
  const [readingList, setReadingList] = useState<Book[]>([]);

  useEffect(() => {
    if (data && data.books) {
      setBooks(data.books);
      setSearchResults(data.books);
    }
  }, [data]);

  const handleSearch = (query: string) => {
    if (query) {
      const results = books.filter((book) =>
        book.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults(books);
    }
  };

  const handleAddToReadingList = (book: Book) => {
    if (!readingList.some((b) => b.title === book.title)) {
      setReadingList([...readingList, book]);
    }
  };

  const handleRemoveFromReadingList = (book: Book) => {
    setReadingList(readingList.filter((b) => b.title !== book.title));
  };

  if (loading) return <CircularProgress />;

  return (
    <Container>
      <Typography
        mt={5}
        mb={3}
        variant="h4"
        component="h1"
        style={{ color: "#335C6E" }}
      >
        Book Assignment
      </Typography>
      <SearchBar onSearch={handleSearch} />
      {books.length < 1 ? (
        <NoData message="No Books found" />
      ):
      <BookList books={searchResults} onAdd={handleAddToReadingList} />
      }
      {readingList && readingList.length > 0 && (
        <>
          <Typography mt={3} mb={2} variant="h6" component="h2">
            Reading List
          </Typography>
          <ReadingList
            readingList={readingList}
            onRemove={handleRemoveFromReadingList}
          />
        </>
      )}
    </Container>
  );
};

export default App;
