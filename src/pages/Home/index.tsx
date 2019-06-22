import React from 'react';
import { Link } from 'react-router-dom';

import Board from '../../components/Board';
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
      <Board/>
    </div>
  </div>
)

export default Home;