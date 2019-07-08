import React from 'react';

import Board from '../../components/Board';
import Promo from './Promo';

const Home: React.FC = () => (
  <div className='home-page container'>
    <Promo />
    <div className='home-page-banner'>
    </div>
    <div className="home-page-intro">
      <div className="row">
        <div className="col-md-6">
          <h2 className="home-page-header">
            Introduction
          </h2>
          <div className="home-page-content">
            <p id="home-page-content-intro-1">
              With endless advancements in science and technology, that such fields are solely for experts and professionals. We have come to a point where spreading science as an open culture has never been more important.</p>
            <p id="home-page-content-intro-2">
              During Science in a Nutshell, the main academic session of ICISTS, we aim to tackle this particular issue. As the meaning of the titular phrase - in a nutshell is synonymous to in short; in essence - suggests, the point is to simply explain otherwise seemingly difficult scientific concepts.
            </p>
            <p id="home-page-content-intro-3">
              Participants will have to focus on how to convey complex subject matter in a straightforward and engaging way, rather than only on the apparent professionalism of it. Your job is to make it so that fellow teams and judges can understand your given topic with ease, despite being unfamiliar with it.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <h2 className="home-page-header">
            Rules
          </h2>
          <div className="home-page-content">
            <h4>During the Preparation</h4>
            <ol>
              <li>Basic stationary supplies will be provided.  ( Scissors, glue, paper, scotch-tape, etc. )</li>
              <li>Participants are not allowed to buy materials individually.</li>
              <li>If any additional supplies are needed, participants should fill the official request form until the previously notified due date.</li>
            </ol>
            <h4>During the Presentation</h4>
            <ol>
              <li>Each team should present the subject within <b>5 minutes</b>.</li>
              <li>Please be aware that there will be a Q&A session separately from the presentation time.</li>
              <li>During the presentation, participants will be notified 30 seconds before the time limit. There will be a 0.1 point deduction for every 5 seconds after the time limit.</li>
              <li>There is no limit on the number of people who participate in the presentation. </li>
              <li>There are no specific restrictions on the format of the presentation, but there are restrictions on the presentation material.</li>
                <ol>
                  <li> Participants are <b>NOT</b>allowed to use <u>electronic presentation media(ex. ppt,prezi) and video materials.</u></li>
                  <li> Auditory materials are allowed. </li>
                  <li>When using any graphic materials ( photograph, picture ), participants should get a permission through the staffs.</li>
                </ol>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <h2 className='home-page-header'>
      Team Topics
    </h2>
    <div className="home-page-topic-board">
      <Board/>
    </div>
  </div>
)

export default Home;