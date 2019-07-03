import React from 'react';
import { IFirebaseProps, IFirebaseState, withFirebase } from '../../components/Firebase';
import Table from '../../components/Table';
import NewTopic from '../../components/NewTopic';
import { compose } from 'recompose';
import { withAuthorization } from '../../components/Session';


interface IAdminState {
  data: any[];
}

class AdminPageBase extends React.Component<IFirebaseProps, IAdminState & IFirebaseState> {
  constructor(props: any) {
    super(props)
    this.state = {
      data: [],
      firebaseLoaded: false,
    }
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
        data: collector,
        firebaseLoaded: true
      })
    })
  }

  onLogoutButtonClick = (event: any) => {
    this.props.firebase.doSignOut();
  }


  render() {
    const { data, firebaseLoaded } = this.state;
    return (
      <div className="admin-page container">
        <h1>
          Admin
        </h1>
        <button className="btn btn-primary" onClick={this.onLogoutButtonClick}>Logout</button>
        <div className="admin-page-manage-buttons">
          <div className="row">
            <div className="col">
              <NewTopic/>
            </div>
            <div className="col"/>
            <div className="col"/>
            <div className="col">
              <h4> Total: { data.length } topics </h4>
            </div>
          </div>
        </div>
        {/* Tables for admin page  */}
        {firebaseLoaded ?
          <div className="admin-page-manage-table">
            <Table header={['Index', 'Title', 'Team', 'Progress', 'Edit']} data={data}/>
          </div> : 
          <div className="loading-container">
              <div className="loading"></div>
              <div id="loading-text">loading</div>
          </div> }
      </div>
    );
  }
}

const authCondition = (authUser: any) => authUser != null;

const AdminPage = compose(
  withFirebase,
  withAuthorization(authCondition),
)(AdminPageBase);

export default AdminPage;
