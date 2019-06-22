import React from 'react';
import { Link } from 'react-router-dom';

import TopicCard from '../../components/TopicCard/index';

const Home: React.FC = () => (
  <div className='home-page'>
    <h1>
      ICISTS 2019 Science in a Nutshell
    </h1>
    <div className='home-page-banner'>
      This section is for the banner.
    </div>
    <hr/>
    <div className="home-page-topic-cards">
      This section is for topic cards.
      <ul>
        <li>
          <Link to='topic/1'><TopicCard topicNum='1' topic='Topic 1' description='blabla'></TopicCard></Link>
        </li>
        <li>
          <Link to='topic/2'><TopicCard topicNum='2' topic='Topic 2' description='blabla'></TopicCard></Link>
        </li>
        <li>
          <Link to='topic/3'><TopicCard topicNum='3' topic='Topic 3' description='blabla'></TopicCard></Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Home;