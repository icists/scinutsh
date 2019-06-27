import React from 'react';
import { IFirebaseProps, IFirebaseState, withFirebase } from '../../components/Firebase';
import Table from '../../components/Table';
import NewTopic from '../../components/NewTopic';


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


  render() {
    const { data, firebaseLoaded } = this.state;
    return (
      <div className="admin-page container">
        <h1>
          Admin
        </h1>
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
          </div> : <div>Loading...</div>}
      </div>
    );
  }
}

const AdminPage = withFirebase(AdminPageBase);

export default AdminPage;
