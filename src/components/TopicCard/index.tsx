import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

interface TopicCardProps {
  id: string;
  title: string;
  team: string;
}

const TopicCard: React.FC<TopicCardProps> = (props: TopicCardProps) => (
  <div className="topic-card">
    <Link to={`topic/${props.id}`} >
      <h5>
        {props.title}
      </h5>
    </Link>
    <div className="topic-card-team">
      {props.team}
    </div>
  </div>
);

export default TopicCard;
