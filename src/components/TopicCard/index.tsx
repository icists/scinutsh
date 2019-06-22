import React from 'react';
import { Link } from 'react-router-dom';

interface TopicCardProps {
  topicNum: string;
  title: string;
  team: string;
}

const TopicCard: React.FC<TopicCardProps> = (props: TopicCardProps) => (
  <div className="topic-card">
    <Link to={`topic/${props.topicNum}`}>
      <h5>
        {props.title}
      </h5>
    </Link>
      <p>
        {props.team}
      </p>
  </div>
);


export default TopicCard;
