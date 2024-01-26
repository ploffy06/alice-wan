import NavBar from "../components/NavBar/NavBar";
import ReviewCard from "../components/BookReview/ReviewCard";
import React, { useState, useEffect } from 'react';
import "../App.css";

const reviewsData = [
  {
    title: "The Forever War",
    author: "Haldeman, Joe",
    rating: 3,
    description: `
    Though I assume that the war and training scenes were described in an almost robotic manner to emphasis
    the rapidity of the military and war, I found it mediocre and difficult to evoke strong imagery.
    I did, however, enjoy the parts where Mandella was on Earth or the planet Heaven, away from the war (ironic).
    `
  },
  {
    title: "Beautiful Star",
    author: "Mishima, Yukio",
    rating: 3.5,
    description: `
    Beautiful. The langauge used was evocative and I especially adored the imagery for Akiko beautiful appearance.
    I enjoyed the bizzareness of UFOs and each member coming from a different planet.

    However, I wish the book delved more into where the UFOs came from and what it meant for the Osugi family to
    have come from different planets. I also sensed that the ending was rushed and ended in a way that it
    felt as though the book was unfinished. But, for me, the Yukio's writing made up for this unsatisfying ending.
    `
  },
  {
    title: "Norwegian Wood",
    author: "Murakami, Haruki",
    rating: 5,
    description: `
    I love this book. Murakami's style of writing is elegant, evocative and descriptive such that
    when I read, it feels more like my eyes are gliding along each line. A simple plot, with moments of intense
    drama and grief, Murakami has created a truly stunny masterpiece.
    `
  },
  {
    title: "Fahrenheit 451",
    author: "Bradbury, Ray",
    rating: 3.5,
    description: `
    The concept is really fascinating and brings out the fear and potential reality of books being tabboo in society. The symbolism
    of fire initially sparks the idea of destruction but later brings forward warmth and light - a compelling contrast. My only critique
    is the overuse of repetition in this book.
    `
  },
];

const itemsPerPage = 6; // Set the number of items to display per page

const BookReview = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [booksToDisplay, setBooksToDisplay] = useState([]);

    useEffect(() => {
      // Sort the reviewsData array alphabetically by author
      const sortedReviewsData = reviewsData.slice().sort((a, b) => a.author.localeCompare(b.author));

      // Calculate the start and end indices based on the current page
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      // Slice the sorted array to get the books for the current page
      const booksForPage = sortedReviewsData.slice(startIndex, endIndex);

      // Update the state
      setBooksToDisplay(booksForPage);
    }, [currentPage]);

    const handlePreviousPage = () => {
      if (currentPage > 1) {
        setCurrentPage((prevPage) => prevPage - 1);
      }
    }

    const handleNextPage = () => {
      const maxPage = Math.ceil(reviewsData.length / itemsPerPage);
      if (currentPage < maxPage) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    };

    return (
      <div>
        <NavBar />
        <div className="BookReview">
          {booksToDisplay.map((review, index) => (
            <ReviewCard
              key={index}
              title={review.title}
              author={review.author}
              rating={review.rating}
              description={review.description}
            />
          ))}
        </div>
        <div className="PageNav">
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>&lt; Previous</button>
          <button onClick={handleNextPage} disabled={currentPage === Math.ceil(reviewsData.length / itemsPerPage)}>Next &gt;</button>
        </div>
      </div>
    );
  };

export default BookReview;
