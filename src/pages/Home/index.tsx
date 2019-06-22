import React from 'react';
import { Link } from 'react-router-dom';

import Board from '../../components/Board';

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
      <Board/>
      <ul>
        <li>
          <Link to='topic/1'>Topic 1</Link>
        </li>
        <li>
          <Link to='topic/2'>Topic 2</Link>
        </li>
        <li>
          <Link to='topic/3'>Topic 3</Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Home;