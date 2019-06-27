import React from 'react';

import Board from '../../components/Board';
import Promo from './Promo'

const Home: React.FC = () => (
  <div className='home-page container'>
    <Promo />
    <div className='home-page-banner'>
    </div>
    <div className="home-page-intro">
      <h3 className="home-page-intro-header">
        Introduction
      </h3>
      <div className="home-page-intro-content">
        <p>
          With endless advancements in science and technology, that such fields are solely for experts and professionals. We have come to a point where spreading science as an open culture has never been more important. During Science in a Nutshell, the main academic session of ICISTS, we aim to tackle this particular issue. As the meaning of the titular phrase - in a nutshell is synonymous to in short; in essence - suggests, the point is to simply explain otherwise seemingly difficult scientific concepts.
        </p>
        <p>
          Participants will have to focus on how to convey complex subject matter in a straightforward and engaging way, rather than only on the apparent professionalism of it. Your job is to make it so that fellow teams and judges can understand your given topic with ease, despite being unfamiliar with it.
        </p>
      </div>
    </div>
    <h3 className='home-page-topics-header'>
      Team Topics
    </h3>
    <div className="home-page-topic-board">
      <Board/>
    </div>
  </div>
)

export default Home;