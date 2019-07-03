import React from 'react';

import Board from '../../components/Board';
import Promo from './Promo'

const Home: React.FC = () => (
  <div className='home-page container'>
    <Promo />
    <div className='home-page-banner'>
    </div>
    <div className="home-page-intro">
      <div className="row">
        <div className="col">
          <h2 className="home-page-header">
            Introduction
          </h2>
          <div className="home-page-content">
            <p id="home-page-content-intro">
              With endless advancements in science and technology, that such fields are solely for experts and professionals. We have come to a point where spreading science as an open culture has never been more important. During Science in a Nutshell, the main academic session of ICISTS, we aim to tackle this particular issue. As the meaning of the titular phrase - in a nutshell is synonymous to in short; in essence - suggests, the point is to simply explain otherwise seemingly difficult scientific concepts.

              Participants will have to focus on how to convey complex subject matter in a straightforward and engaging way, rather than only on the apparent professionalism of it. Your job is to make it so that fellow teams and judges can understand your given topic with ease, despite being unfamiliar with it.
            </p>
          </div>
        </div>
        <div className="col">
          <h2 className="home-page-header">
            Rules
          </h2>
          <div className="home-page-content">
            <p id="home-page-content-rules">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat efficitur suscipit. Donec euismod neque eu lacus egestas sodales. In malesuada nunc erat, sit amet egestas lacus efficitur ac. Aliquam semper ornare ex. Nam a dui et dui suscipit auctor vitae sed neque. Suspendisse varius, tortor auctor eleifend consequat, odio augue iaculis orci, ut euismod turpis eros a tortor. Duis id accumsan metus. Donec laoreet volutpat turpis suscipit egestas.

Sed consequat enim nec massa interdum, ac tempor velit varius. In hac habitasse platea dictumst. Aenean ut ipsum orci. Nullam neque diam, molestie sit amet ligula non, hendrerit cursus tortor. Phasellus tristique facilisis justo, eget accumsan sem malesuada at. Nullam orci mauris, elementum quis suscipit ac, eleifend viverra velit. Etiam ante erat, porta ac ultrices pellentesque, tincidunt quis metus. Quisque eu velit non justo sodales consequat. Aenean nec condimentum odio, a mattis justo. Pellentesque ultrices metus efficitur odio bibendum bibendum.
            </p>
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