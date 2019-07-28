import React from 'react';

import Board from '../../components/Board';
import Promo from './Promo';
import './Home.css';

const videoWidth = 520;

const Home = () => (
  <div className='home-page container'>
    <Promo />
    <div className="home-page-intro">
      <h1 className="home-page-header">
        Introduction
      </h1>
      <div className="home-page-content">
        <p id="home-page-content-intro-1">
          With endless advancements in science and technology, that such fields are solely for experts and professionals. We have come to a point where spreading science as an open culture has never been more important.
        </p>
        <p id="home-page-content-intro-2">
          During Science in a Nutshell, the main academic session of ICISTS, we aim to tackle this particular issue. As the meaning of the titular phrase - in a nutshell is synonymous to in short; in essence - suggests, the point is to simply explain otherwise seemingly difficult scientific concepts.
        </p>
        <p id="home-page-content-intro-3">
          Participants will have to focus on how to convey complex subject matter in a straightforward and engaging way, rather than only on the apparent professionalism of it. Your job is to make it so that fellow teams and judges can understand your given topic with ease, despite being unfamiliar with it.
        </p>
      </div>
        <h3 className="home-page-sub-header">Example Videos</h3>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <iframe width={videoWidth} height="315" src="https://www.youtube.com/embed/opqIa5Jiwuw?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="col-6">
              <iframe width={videoWidth} height="315" src="https://www.youtube.com/embed/ydqReeTV_vk?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <iframe width={videoWidth} height="315" src="https://www.youtube.com/embed/sWwd5vks9n8?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="col">
              <iframe width={videoWidth} height="315" src="https://www.youtube.com/embed/VtItBX1l1VY?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <iframe width={videoWidth} height="315" src="https://www.youtube.com/embed/xx3RoYg651I?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="col">
              <iframe width={videoWidth} height="315" src="https://www.youtube.com/embed/q3OzzVh0JtQ?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
      </div>
    </div>
    <h1 className="home-page-header">
      Rules
    </h1>
    <div className="home-page-content">
      <h4>During the Preparation</h4>
      <ol>
        <li>Basic stationary supplies will be provided.  ( Scissors, glue, paper, scotch-tape, etc. )</li>
        <li>Participants are not allowed to buy materials individually.</li>
        <li>If any
          <a target="_blank" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vR-1uXlQkpTS3AdoRmsfDm4MIGJD566UMPqmaMSfWvJxuNqKdDX9RJu8gZdKXRALrErgQe_MLtIqGat/pubhtml">
            <button className="btn-sm btn-outline-info">
              additional supplies
            </button>
          </a>
          are needed, participants should fill the official request form until the previously notified due date.</li>
      </ol>
      <h4>During the Presentation</h4>
      <ol>
        <li>Each team should present the subject within <b>5 minutes</b>.</li>
        <li>Please be aware that there will be a Q&A session separately from the presentation time.</li>
        <li>During the presentation, participants will be notified <b>30 seconds before</b> the time limit. There will be a 0.1 point deduction for every 5 seconds after the time limit.</li>
        <li>There is no limit on the number of people who participate in the presentation. </li>
        <li>There are <b>no specific restrictions</b> on the format of the presentation, but there are restrictions on the presentation material.</li>
        <ol>
          <li> Participants are <b>NOT</b> allowed to use <u>electronic presentation media(ex. ppt,prezi) and video materials.</u></li>
          <li> Auditory materials are allowed. </li>
          <li>When using any graphic materials ( photograph, picture ), participants should get a permission through the staffs.</li>
        </ol>
      </ol>
    </div>
    <h2 className='home-page-header'>
      Team Topics
    </h2>
    <div className="home-page-topic-board">
      <Board />
    </div>
  </div>
);

export default Home;