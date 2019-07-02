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
    this.props.firebase.topic(topicID).on('value', (snapshot: any) => {
      const data = snapshot.val();
      this.setState({
        firebaseLoaded: true,
        ...data
      });
    })
  }

  render() {
    const { title, team } = this.state;
    if (!this.state.firebaseLoaded) {
      return (
        <div className="topic-page container">
          <p id="topic-page-loading">
            Loading...
          </p>
        </div>
      )
    }

    return (
      <div className='topic-page container'>
        <div className="topic-page-title">
          <h1 id="topic-title">
            {title}
          </h1>
          <h4 id="topic-team">
            {team}
          </h4>
        </div>
        <div className="topic-page-intro">
          <h2>Introduction</h2>
          <p>This is a awesome topic!</p>
        </div>
        <div className="topic-page-materials">
          <h2>Materials</h2>
          <p>Here are the materials</p> 
        </div>
      </div>
    );
  }
}

export default withFirebase(TopicPage);