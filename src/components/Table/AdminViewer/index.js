import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { withFirebase } from '../../Firebase';

const TableViewerBase = (props) => {
  const { headers, data, id, name } = props;
  return (
    <table className="topic-data-table table">
      <thead>
        <tr>
          {headers.map(header => (
            <th key={header} scope='col'> {header} </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data
          ? Object.keys(data).map((key, index) => (
            <tr key={data[key].name}>
              <td>{data[key].name}</td>
              <td>{data[key].content}</td>
              <td> <a href={data[key].link}>{data[key].link}</a></td>
              <td>
                <button className="btn-sm btn-secondary" onClick={e => {
                  props.firebase.db.ref(`topics/${id}/${name}/${key}`).remove();
                  e.preventDefault();
                }}>
                  Delete
              </button>
              </td>
            </tr>))
          : null}
      </tbody>
    </table>
  );
}

const TableViewer = withFirebase(TableViewerBase);

class SingleViewer extends React.Component {

  shouldComponentUpdate() {
    if (this.props.edit)
      return false;
    else
      return true;
  }

  render() {
    return (
      <div className="topic-data-single">
        {this.props.single.split('\n').map((phrase, index) => (
          <p key={index}>{phrase}</p>
        ))}
      </div>
    );
  }
} 

class AdminViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      new_name: "",
      new_content: "",
      new_link: "",
      data: this.props.data,
      isEditing: false,
      modal: false,
    }
  }

  componentDidMount() {
    const { data } = this.props;
    if (!data) {
      this.setState({
        isEditing: true,
      });
    }
  }
  
  handleShow = event => {
    const { data } = this.props;
    this.setState({
      isEditing: data ? false : true,
      modal: true,
    })
  }

  handleHide = e => {
    this.setState({
      isEditing: false,
      modal: false,
    })
  }

  toggleEdit = e => {
    const { isEditing } = this.state;
    this.setState({
      isEditing: !isEditing,
    })
  }

  onEditorChange = e => {
    const target = e.currentTarget;
    this.setState({
      [target.name]: target.value
    })
  }

  onSingleEditorSave = e => {
    const { id, firebase, name } = this.props;

    this.setState({
      isEditing: false,
      data: this.state.data,
    });

    firebase.topic(id).update({
      [name]: this.state.data,
    });
  }

  onTableEditorNewMaterial = e => {
    const { id, firebase, name } = this.props;
    const { new_name, new_content, new_link } = this.state;

    const newEntry = firebase.db.ref(`topics/${id}/${name}`).push();
    newEntry.set({
      name: new_name,
      content: new_content,
      link: new_link,
    })

    firebase.db.ref(`topics/${id}/${name}`).on('value', snapshot => {
      this.setState({
        data: snapshot.val(),
      })
    })

    this.setState({
      new_name: "",
      new_content: "",
      new_link: "",
    })

    e.preventDefault();
  }

  onTableEdit = e => {

  }

  render() {
    const { view, name, title, id } = this.props;
    const { modal, isEditing, data } = this.state;
    if (view === 'table') {
      return (
        <div className="admin-topic-materials-viewer">
          <Button variant='info' size="sm" onClick={this.handleShow}>View</Button>
          <Modal show={modal} onHide={this.handleHide} size='lg' scrollable={true}>
            <Modal.Header closeButton>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              {data
                ? <TableViewer headers={['Name', 'Content', 'Link', 'Edit']} data={data} id={id} name={name}/>
                : <div className="admin-topic-no-data-message text-center">
                    <div className="alert alert-danger">
                      No {name} found!
                    </div>
                    <p className="text-center">
                      Please add new {name} :)
                    </p>
                  </div>}
              <form>
                <div className="admin-topic-materials-viewer-new-material form-group">
                  <label className="" htmlFor="new-material-name">Name</label>
                  <input
                    className="form-control"
                    id="new-material-name"
                    type="text"
                    value={this.state.new_name}
                    onChange={e => this.setState({ new_name : e.currentTarget.value })}
                    placeholder="Material Name"
                  />
                  <label htmlFor="new-material-content">Content</label>
                  <input
                    className="form-control"
                    id="new-material-content"
                    type="text"
                    value={this.state.new_content}
                    onChange={e => this.setState({ new_content : e.currentTarget.value })}
                    placeholder="Content"
                  />
                  <label htmlFor="new-material-link">Link</label>
                  <input
                    className="form-control"
                    id="new-material-link"
                    type="url"
                    value={this.state.new_link}
                    onChange={e => this.setState({ new_link : e.currentTarget.value })}
                    placeholder="Link"
                  />
                  <div className="text-right">
                    <button className="btn-sm btn-success" onClick={this.onTableEditorNewMaterial}>
                      New {title}
                    </button>
                  </div>
                </div>
              </form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="primary" onClick={this.handleHide}>
                Save
              </Button>
              <Button variant="secondary" onClick={this.handleHide}>
                Close 
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }

    if (view === 'single') {
      return (
        <div className="admin-topic-materials-viewer">
          <Button variant='info' size="sm" onClick={this.handleShow}>View</Button>
          <Modal show={modal} onHide={this.handleHide} size='lg' scrollable={true} >
            <Modal.Header closeButton>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              {data
                ? <SingleViewer single={data} edit={isEditing}/>
                : <div className="admin-topic-no-data-message alert alert-danger text-left">
                    <h4 className="alert-heading" role="alert">
                      No {name} found!
                    </h4>
                    <p>The {name} is not uploaded yet. The {name} does not exist at the database. </p>
                    <hr/>
                    <p>Please write {name} and save it. :)</p>
                </div>}
              {isEditing
                ? <div className="admin-topic-single-edit">
                    <h5 htmlFor="single-edit">Edit</h5>
                    <textarea
                      className="form-control"
                      rows={8}
                      id="single-edit"
                      name="data"
                      value={data}
                      onChange={this.onEditorChange}
                    />
                  </div>
                : null}
            </Modal.Body>

            <Modal.Footer>
              {isEditing
                ? <Button variant="danger" onClick={this.toggleEdit} type="submit">
                    Cancle
                  </Button>
                : <Button variant="secondary" onClick={this.toggleEdit} type="submit">
                    Edit
                  </Button>}
              <Button variant="primary" onClick={this.onSingleEditorSave}>
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
}


export default withFirebase(AdminViewer);