import React from 'react';

import TopicCard from '../TopicCard';
import { withFirebase } from '../Firebase';

class BoardBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      firebaseLoaded: false,
    };
  }

  componentDidMount() {
    this.props.firebase.topics().on('value', snapshot => {
      const collector = [];
      snapshot.forEach(topic => {
        collector.push({
          ...topic.val()
        })
      });
      this.setState({
        topics: collector,
        firebaseLoaded: true
      });
    })
  }

  render() {
    const { topics, firebaseLoaded } = this.state;
    if (!firebaseLoaded) {
      return (
        <div className="board text-center">
          <div className="loading spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
    return (
      <div className="board container">
        <div className="row justify-content-center">
          {topics.map((topic, index) => (
            <div key={topic.id} className="topic-card-wrapper">
              <div className="col-md-2">
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
