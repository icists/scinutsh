import React from 'react';
import { Link } from 'react-router-dom';
import './TopicCard.css';

const TopicCard = (props) => {
  const { id, title, team } = props;
  return (
    <Link to={`topic/${id}`} >
      <div className="topic-card">
        <div className="upperbar"></div>
        <h5 className="titles">
          {title}
        </h5>
        <div className="topic-card-team">
          {team}
        </div>
      </div>
    </Link>
  );
}

export default TopicCard;
