import React from 'react';
import { Link } from 'react-router-dom';

import TopicCard from '../TopicCard';
import { IFirebaseProps, withFirebase } from '../Firebase';

interface IBoardState {
  topics: Topic[];
}

type Topic = {
  title: string;
  team: string;
}

class BoardBase extends React.Component<IFirebaseProps, IBoardState> {
  constructor(props: any) {
    super(props);
    this.state = {
      topics: []
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
      })
    })
  }

  render() {
    const { topics } = this.state;
    return (
      <div className="board container">
        <div className="row">
          {topics.map((topic, index) => (
            <div className="col md-3">
              <TopicCard topicNum={(index+1).toString()} title={topic.title} team={topic.team}/>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const Board = withFirebase(BoardBase);

export default Board;
