import React from 'react';
import { IFirebaseProps, withFirebase } from '../../Firebase';
import { Data } from '../../Firebase/types';
import AdminViewer from '../AdminViewer';

interface ITableRowState {
  isEditing: boolean;
}

interface ITableRowProps {
  index: number;
}

class TableRowBase extends React.Component<IFirebaseProps & Data & ITableRowProps, Data & ITableRowState> {
  constructor(props: any) {
    super(props)
    this.state = {
      ...this.props,
      isEditing: false
    }
  }

  onInformationChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    this.setState(prevState => ({
      ...prevState,
      [target.name]: target.value,
    }));
  }

  onEditButtonClicked = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget;

    if (target.name === 'Save') {
      const { id } = this.props;
      const { title, team, progress } = this.state;
      this.props.firebase.topic(id).update({
        title: title,
        team: team,
        progress: progress,
      });
    }

    if (target.name === 'Delete') {
      if (window.confirm('Are you sure to delete the topic?')) {
        const { id } = this.props;
        this.props.firebase.topic(id).remove();
      }
      return;
    }

    this.setState({
      isEditing: this.state.isEditing ? false : true,
    })
  };

  viewMaterials = () => {

  }

  render() {
    const { id, index } = this.props;
    const { title, team, progress, introduction, materials, isEditing } = this.state;
    return (
        <tr>
          <td> {index} </td>
          <td>
            {isEditing ?
              <input
                onChange={this.onInformationChanged}
                className="form-control"
                type="text"
                name="title"
                value={title}
                placeholder="Title"
              /> : title}
          </td>
          <td>
            {isEditing ?
              <input
                onChange={this.onInformationChanged}
                className="form-control"
                type="text"
                name="team"
                value={team}
                placeholder="Team Name"
              /> : team}
          </td>
          <td>
            {isEditing ?
              <input
                onChange={this.onInformationChanged}
                className="form-control"
                type="url"
                name="progress"
                value={progress}
                placeholder="Progress"
              /> : progress}
          </td>
          <td>
            <AdminViewer
              id={id}
              data={introduction}
              view='single'
              name='introduction'
              title='Introduction'
            />
          </td>
          <td>
            <AdminViewer
              id={id}
              data={materials}
              view='table'
              name='materials'
              title='Materials'
            />
          </td>
          <td>
            {isEditing ?
              <button
                className="btn-sm btn-secondary"
                name='Save'
                onClick={this.onEditButtonClicked}
              > Save </button>
              :
              <button
                className="btn-sm btn-secondary"
                onClick={this.onEditButtonClicked}
              > Edit </button>
            } 
            {isEditing ?
              <button
                className="btn-sm btn-danger"
                name='Cancel'
                onClick={this.onEditButtonClicked}
              >Cancel</button> : null}
            {isEditing ?
              <button
                className="btn-sm btn-danger"
                name='Delete'
                onClick={this.onEditButtonClicked}
                style={{marginLeft: 10}}
              >Delete</button> : null}
          </td>
        </tr>
    );
  }
} 

const TableRow = withFirebase(TableRowBase);

export default TableRow;