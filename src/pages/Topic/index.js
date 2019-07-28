import React from 'react';
import { withFirebase } from '../../components/Firebase';

import './Topic.css';

class TopicPage extends React.Component {
  TOPIC_PAGE_INIT = {
    id: "",
    title: "",
    team: "",
    progress: "",
    introduction: "",
    materials: [],
  };
  constructor(props) {
    super(props)
    this.state = {
      ...this.TOPIC_PAGE_INIT,
      firebaseLoaded: false,
    }
  }

  componentDidMount() {
    const { topicID } = this.props.match.params;
    this.props.firebase.topic(topicID).on('value', snapshot => {
      this.setState({
        firebaseLoaded: true,
        ...snapshot.val(),
      });
    })
  }

  componentWillUnmount() {
    const { topicID } = this.props.match.params;
    this.props.firebase.topic(topicID).off();
  }

  render() {
    const { title, team, introduction, main, materials } = this.state;
    console.log(materials);
    if (!this.state.firebaseLoaded) {
      return (
        <div className="topic-page container text-center">
          <div className="loading spinner-border" role="status"></div>
        </div>
      );
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
        <div className="topic-page-materials">
          <div className="main-material">
          {main
            ? <iframe className="main-material-docs" src={`${main}?embedded=true`} />
            : <button className="btn btn-lg btn-block btn-danger">
                No main material uploaded
              </button>
          }
          </div>
        </div>
      </div>
    );
  }
}

export default withFirebase(TopicPage);