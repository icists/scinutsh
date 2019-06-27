import React from 'react';
import { IFirebaseProps, IFirebaseState, withFirebase } from '../../components/Firebase';
import { Data } from '../../components/Firebase/types';
import { RouteChildrenProps } from 'react-router';

class TopicPage extends React.Component<IFirebaseProps & RouteChildrenProps<{ topicID: string; }>, IFirebaseState & Data> {
  constructor(props: any) {
    super(props)
    this.state = {
      id: "",
      title: "",
      team: "",
      progress: "",
      firebaseLoaded: false,
    }
  }

  componentDidMount() {
    const { topicID } = this.props.match!.params;
    console.log(topicID);
    this.props.firebase.topic(topicID).on('value', (snapshot: any) => {
      const data = snapshot.val();
      this.setState({
        firebaseLoaded: true,
        ...data
      });
    })
  }

  render() {
    const { title, team, progress } = this.state;
    if (!this.state.firebaseLoaded) {
      return (
        <div className="topic-page-loading">
          Loading...
        </div>
      )
    }
    return (
      <div className='topic-page'>
        <div className="topic-page-title">
          <h1>
            Topic: {title}
          </h1>
          <h3>
            Team: {team}
          </h3>
        </div>
        <div className="topic-page-description">
          <p>This is a awesome topic!</p>
        </div>
        <div className="topic-page-materials">
          Here are the materials
    </div>
      </div>
    );
  }
}

export default withFirebase(TopicPage);