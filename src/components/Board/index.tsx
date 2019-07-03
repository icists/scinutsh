import React from 'react';

import TopicCard from '../TopicCard';
import { IFirebaseProps, withFirebase, IFirebaseState } from '../Firebase';

interface IBoardState {
  topics: Topic[];
}

type Topic = {
  id: string;
  title: string;
  team: string;
}

class BoardBase extends React.Component<IFirebaseProps, IBoardState & IFirebaseState> {
  constructor(props: any) {
    super(props);
    this.state = {
      topics: [],
      firebaseLoaded: false,
    };
  }

  componentDidMount() {
    this.props.firebase.topics().on('value', snapshot => {
      const collector: any[] = [];
      snapshot.forEach(topic => {
        collector.push({
          ...topic.val()
        })
      })
      this.setState({
        topics: collector,
        firebaseLoaded: true
      })
    })
  }

  render() {
    const { topics, firebaseLoaded } = this.state;
    if (!firebaseLoaded) {
      return (
        <div className="board">
          <div className="loading-container">
              <div className="loading"></div>
              <div id="loading-text">loading</div>
          </div>
        </div>
      );
    }
    return (
      <div className="board container">
        <div className="row justify-content-start">
          {topics.map((topic, index) => (
            <div className="topic-card-wrapper">
              <div key={topic.id} className="col-md-2">
                <TopicCard id={topic.id} title={topic.title} team={topic.team} />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const Board = withFirebase(BoardBase);

export default Board;
