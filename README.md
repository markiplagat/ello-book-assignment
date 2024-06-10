# Ello Book Assignment

This project is a part of the Ello web viewer product for teachers to assign books to students. The teacher-facing UI allows teachers to search for books, add them to a reading list, and manage the reading list.

## Features

- Search for books by title
- Display a list of search results with book title, author, and cover photo
- Add books to the reading list
- Display the reading list with an option to remove books

## Technologies Used

- React
- Apollo Client for GraphQL
- Material-UI for UI components
- TypeScript for type safety

## Project Structure

- `ello-assignment`: Contains the React frontend code
- `ello-assignment/backend`: Contains the backend GraphQL server

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:

    ```bash
    cd ello-assignment/backend
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Start the backend server:

    ```bash
    npm start
    ```

    The server will be running at `http://localhost:4000/`.

### Frontend Setup

1. Navigate to the frontend directory:

    ```bash
    cd ello-assignment
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Start the frontend development server:

    ```bash
    npm start
    ```

    The app will be running at `http://localhost:3000/`.

## Usage

1. Use the search bar to search for books by title.
2. The search results will be displayed in a grid with the book cover, title, and author.
3. Click the "Add" button to add a book to the reading list.
4. The reading list will display all added books with an option to remove them.

## Styling

The application uses the "Mulish" Google font and the following colors:

### Primary Colors

- Turquoise: `#5ACCCC`
- White: `#FFFFFF`
- Steel Blue: `#335C6E`
- Yellow: `#FABD33`

### Secondary Colors

- Orange Red: `#F76434`
- Teal: `#4AA088`
- Yellow Dark: `#FAAD00`
- Turquoise Dark 1: `#53C2C2`
- Turquoise Dark 2: `#28B8B8`
