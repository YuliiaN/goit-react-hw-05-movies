import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import MovieService from 'services/MovieService';
import {
  StyledReviewList,
  StyledReviewItem,
  StyledSpan,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    (async function fetchReviews() {
      try {
        const api = new MovieService();
        const res = await api.getMovieReviews(movieId);
        setReviews(res);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [movieId]);

  const notFound = <p>We didn't find any reviews for this movie</p>;

  return (
    <StyledReviewList>
      {reviews.length
        ? reviews.map(({ id, username, rating, content }) => (
            <StyledReviewItem key={id}>
              <p style={{ display: 'flex', gap: '10px' }}>
                <StyledSpan>Author:</StyledSpan>
                <StyledSpan style={{ fontWeight: '600', fontSize: '20px' }}>
                  {username}
                </StyledSpan>
                <StyledSpan>
                  <FaStar style={{ color: 'gold' }} />
                  {rating}
                </StyledSpan>
              </p>
              <p>{content}</p>
            </StyledReviewItem>
          ))
        : notFound}
    </StyledReviewList>
  );
};

export default Reviews;
