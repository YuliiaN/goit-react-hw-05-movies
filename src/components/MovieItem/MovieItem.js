import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieItem = ({ id, title, name }) => {
  const location = useLocation();

  return (
    <li>
      <Link
        to={`/movies/${id}`}
        state={{ from: location }}
        style={{ color: '#252423' }}
      >
        {title ? title : name}
      </Link>
    </li>
  );
};

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
};

export default MovieItem;
