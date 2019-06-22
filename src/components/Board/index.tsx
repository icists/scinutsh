import React from 'react';
import { Link } from 'react-router-dom';

import TopicCard from '../TopicCard';
import { IFirebaseProps, withFirebase } from '../Firebase';

class BoardBase extends React.Component<IFirebaseProps, {}> {
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <div className="board container">
        <div className="row">
          <div className="col">
            <Link to='topic/1'>
              <TopicCard topicNum='1' topic='Topic 1' description='blabla' />
            </Link>
          </div>
          <div className="col">
            <Link to='topic/2'>
              <TopicCard topicNum='2' topic='Topic 2' description='blabla' />
            </Link>
          </div>
          <div className="col">
            <Link to='topic/3'>
              <TopicCard topicNum='3' topic='Topic 3' description='blabla' />
            </Link>
          </div>
          <div className="col">
            <Link to='topic/3'>
              <TopicCard topicNum='4' topic='Topic 4' description='blabla' />
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Link to='topic/1'>
              <TopicCard topicNum='1' topic='Topic 1' description='blabla' />
            </Link>
          </div>
          <div className="col">
            <Link to='topic/2'>
              <TopicCard topicNum='2' topic='Topic 2' description='blabla' />
            </Link>
          </div>
          <div className="col">
            <Link to='topic/3'>
              <TopicCard topicNum='3' topic='Topic 3' description='blabla' />
            </Link>
          </div>
          <div className="col">
            <Link to='topic/3'>
              <TopicCard topicNum='4' topic='Topic 4' description='blabla' />
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Link to='topic/1'>
              <TopicCard topicNum='1' topic='Topic 1' description='blabla' />
            </Link>
          </div>
          <div className="col">
            <Link to='topic/2'>
              <TopicCard topicNum='2' topic='Topic 2' description='blabla' />
            </Link>
          </div>
          <div className="col">
            <Link to='topic/3'>
              <TopicCard topicNum='3' topic='Topic 3' description='blabla' />
            </Link>
          </div>
          <div className="col">
            <Link to='topic/3'>
              <TopicCard topicNum='4' topic='Topic 4' description='blabla' />
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

const Board = withFirebase(BoardBase);

export default Board;
