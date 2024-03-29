import NavBar from "../components/NavBar/NavBar";
import ReviewCard from "../components/Review/ReviewCard";
import React, { useState, useEffect } from 'react';
import "../App.css";
import { bookReviewsData } from "../components/Review/bookReviewsData";

const itemsPerPage = 8; // Set the number of items to display per page

const BookReview = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [booksToDisplay, setBooksToDisplay] = useState([]);

    useEffect(() => {
      const sortedbookReviewsData = bookReviewsData.slice().sort((a, b) => a.author_lastname.localeCompare(b.author_lastname));

      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      const booksForPage = sortedbookReviewsData.slice(startIndex, endIndex);
      setBooksToDisplay(booksForPage);
    }, [currentPage]);

    const handlePreviousPage = () => {
      if (currentPage > 1) {
        setCurrentPage((prevPage) => prevPage - 1);
      }
    }

    const handleNextPage = () => {
      const maxPage = Math.ceil(bookReviewsData.length / itemsPerPage);
      if (currentPage < maxPage) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    };

    return (
      <div>
        <NavBar />
        <div className="Review">
          {booksToDisplay.map((review, index) => (
            <ReviewCard
              key={index}
              title={review.title}
              author_firstname={review.author_firstname}
              author_lastname={review.author_lastname}
              rating={review.rating}
              description={review.description}
            />
          ))}
        </div>
        <div className="PageNav">
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>&lt; Previous</button>
          <button onClick={handleNextPage} disabled={currentPage === Math.ceil(bookReviewsData.length / itemsPerPage)}>Next &gt;</button>
        </div>
      </div>
    );
  };

export default BookReview;
