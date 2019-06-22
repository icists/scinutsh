import React from 'react';

interface TopicCardProps {
  topicNum: string;
  topic: string;
  description: string;
}

const TopicCard: React.FC<TopicCardProps> = (props: TopicCardProps) => (
  <div className="topic-card">
    <h1>
      #{props.topicNum}: {props.topic}
    </h1>
    <div className="topic-card-description">
      <p>{props.description}</p>
    </div>
  </div>
);


export default TopicCard;
