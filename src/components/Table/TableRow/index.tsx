import React from 'react';
import { IFirebaseProps, withFirebase } from '../../Firebase';

interface ITableRowState {
  isEditing: boolean;
}

interface ITableRowProps {
  index: number;
}

interface IData {
  id: string;
  title: string;
  team: string;
  progress?: string;
}

class TableRowBase extends React.Component<IFirebaseProps & IData & ITableRowProps, IData & ITableRowState> {
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
    this.setState({
      isEditing: this.state.isEditing ? false : true,
    })

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
    }
  };

  render() {
    const { index } = this.props;
    const { title, team, progress, isEditing } = this.state;
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