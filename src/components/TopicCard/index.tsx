import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

interface TopicCardProps {
  id: string;
  title: string;
  team: string;
}

const TopicCard: React.FC<TopicCardProps> = (props: TopicCardProps) => (
  <Link to={`topic/${props.id}`} >
    <div className="topic-card">
      <h5>
        {props.title}
      </h5>
      <div className="topic-card-team">
        {props.team}
      </div>
    </div>
  </Link>
);

export default TopicCard;
