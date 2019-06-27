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
    return (
      <div className="board container">
        <div className="row">
          {firebaseLoaded
          ? topics.map((topic, index) => (
            <div className="col md-3">
              <TopicCard id={topic.id} title={topic.title} team={topic.team}/>
            </div>
          )) : <div>Loading...</div>}
        </div>
      </div>
    )
  }
}

const Board = withFirebase(BoardBase);

export default Board;
