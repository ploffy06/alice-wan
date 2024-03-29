import "./Review.css"

const ReviewCard = ({
    title, author_firstname, author_lastname, rating, description, year
}) => {
    return (
         <div className="ReviewCard">
            <h2>{title}</h2>
            <h3>{author_firstname} {author_lastname}</h3>
            <h3>{year}</h3>
            <p>rating: {rating}/5</p>
            <p>{description}</p>
         </div>
    )
}

export default ReviewCard;