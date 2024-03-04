import NavBar from "../components/NavBar/NavBar";
import ReviewCard from "../components/Review/ReviewCard";
import React, { useState, useEffect } from 'react';
import "../App.css";
import { movieReviewsData } from "../components/Review/movieReviewsData";

const itemsPerPage = 8; // Set the number of items to display per page

const MovieReview = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [booksToDisplay, setBooksToDisplay] = useState([]);

    useEffect(() => {
      const sortedmovieReviewsData = movieReviewsData.slice().sort((a, b) => a.title.localeCompare(b.title));

      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      const booksForPage = sortedmovieReviewsData.slice(startIndex, endIndex);
      setBooksToDisplay(booksForPage);
    }, [currentPage]);

    const handlePreviousPage = () => {
      if (currentPage > 1) {
        setCurrentPage((prevPage) => prevPage - 1);
      }
    }

    const handleNextPage = () => {
      const maxPage = Math.ceil(movieReviewsData.length / itemsPerPage);
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
              rating={review.rating}
              description={review.description}
            />
          ))}
        </div>
        <div className="PageNav">
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>&lt; Previous</button>
          <button onClick={handleNextPage} disabled={currentPage === Math.ceil(movieReviewsData.length / itemsPerPage)}>Next &gt;</button>
        </div>
      </div>
    );
  };

export default MovieReview;
