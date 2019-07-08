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
      introduction: "",
      materials: [],
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
    const { title, team, introduction, materials } = this.state;
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
        <div className="topic-page-intro">
          <h2 className="topic-page-header">Introduction</h2>
          {introduction
            ? introduction.split('\n').map((phrase, index) => (
                <p key={index}>{phrase}</p>
              ))
            : <div className="alert alert-danger" role="alert">
                <h3 className="alert-heading">
                  No Introduction Uploaded
                </h3>
              <p>No introduction is uploaded :(</p>
              <hr />
              <p>Please contact the adminstrator. We are sorry.</p>
              </div>}
        </div>
        <div className="topic-page-materials">
          <h2 className="topic-page-header">Materials</h2>
          <table className="topic-page-materials-table table">
            <thead>
              <tr>
                <td>Name</td>
                <td>Content</td>
                <td>Link</td>
              </tr>
            </thead>
            <tbody>
              {materials ? materials.map(value => (
                <tr key={value.name}>
                  <td>{value.name}</td>
                  <td>{value.content}</td>
                  <td><a href={value.link}>{value.link}</a></td>
                </tr>
              )) : null}
            </tbody>
          </table>
          {materials!.length !== 0
            ? null : <div className="alert alert-danger" role="alert">
              <h3 className="alert-heading">
                No Materials Uploaded
                </h3>
              <p>No Materials are uploaded :(</p>
              <hr />
              <p>Please contact the adminstrator. We are sorry.</p>
            </div>}
        </div>
      </div>
    );
  }
}

export default withFirebase(TopicPage);