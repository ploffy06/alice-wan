import "./Review.css"

const ReviewCard = ({title, author, rating, description}) => {
    return (
         <div className="ReviewCard">
            <h2>{title}</h2>
            <h3>{author}</h3>
            <p>rating: {rating}/5</p>
            <p>{description}</p>
         </div>
    )
}

export default ReviewCard;