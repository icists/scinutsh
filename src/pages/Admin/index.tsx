import React from 'react';
import { IFirebaseProps, IFirebaseState, withFirebase } from '../../components/Firebase';
import Table from '../../components/Table';
import NewTopic from '../../components/NewTopic';
import { compose } from 'recompose';
import { withAuthorization } from '../../components/Session';
import { Data } from '../../components/Firebase/types';


interface IAdminState {
  data: Data[];
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
      const collector: Data[] = [];
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

  componentWillUnmount() {
    this.props.firebase.topics().off();
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
        <div className="text-right">
          <button
            className="btn-sm btn-danger"
            onClick={this.onLogoutButtonClick}>
            Logout
          </button>
        </div>
        <div className="admin-page-manage-buttons">
          <div className="row">
            <div className="col">
              <NewTopic/>
            </div>
            <div className="col"/>
            <div className="col"/>
            <div className="col">
              <h5> Total: { data.length } topics </h5>
            </div>
          </div>
        </div>
        {/* Tables for admin page  */}
        {firebaseLoaded ?
          <div className="admin-page-manage-table">
            <Table header={['Index', 'Title', 'Team', 'Progress', 'Introduction', 'Materials', 'Edit']} data={data}/>
          </div> : 
          <div className="spinner-border" role="status"></div>}
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
