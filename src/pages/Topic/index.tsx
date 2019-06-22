import React from 'react';

const TopicPage: React.FC = (props: any) => (
  <div className='topic-page'>
    <div className="topic-page-title">
      <h1>
        Topic: {props.match.params.topic} 
      </h1>
    </div>
    <div className="topic-page-description">
      <p>This is a awesome topic!</p>
    </div>
    <div className="topic-page-materials">
      Here are the materials
    </div>
  </div>
)

export default TopicPage;