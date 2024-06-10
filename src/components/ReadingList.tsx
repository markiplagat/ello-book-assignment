import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Grid, Paper, Typography } from '@mui/material';

interface Book {
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
  title: string;
}

interface ReadingListProps {
  readingList: Book[];
  onRemove: (book: Book) => void;
}

const ReadingList: React.FC<ReadingListProps> = ({ readingList, onRemove }) => {
  const [hoveredBook, setHoveredBook] = useState(null);

  const handleMouseEnter = (book: any) => {
    setHoveredBook(book);
  };

  const handleMouseLeave = () => {
    setHoveredBook(null);
  };
  return (
    <Grid container spacing={2} className="book-list">
    {readingList.map((book, index) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
        <Paper
          elevation={3}
          className="book-list-item"
          onMouseEnter={() => handleMouseEnter(book)}
          onMouseLeave={handleMouseLeave}
          style={{ position: "relative" }}
        >
          <img src={book.coverPhotoURL} alt={book.title} />
          <Typography variant="h6" className="book-list-item-title">
            {book.title}
          </Typography>
          <Typography variant="body1" className="book-list-item-author">
            by {book.author}
          </Typography>
          {hoveredBook === book && (
            <Button
              variant="contained"
              className="book-list-item-button"
              color="secondary" 
              onClick={() => onRemove(book)}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1,
              }}
            >
              Remove
            </Button>
          )}
        </Paper>
      </Grid>
    ))}
  </Grid>
  );
};

export default ReadingList;
