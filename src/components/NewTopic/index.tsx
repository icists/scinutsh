import React from 'react';

import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { IFirebaseProps, withFirebase } from '../Firebase';

interface INewTopicModalState {
  title: string;
  team: string;
  progress: string;
  modal: boolean;
  valid: boolean;
}

class NewTopicModal extends React.Component<IFirebaseProps, INewTopicModalState> {
  constructor(props: any) {
    super(props)
    this.state = {
      title: "",
      team: "",
      progress: "",
      modal: false,
      valid: true,
    };
  }

  validateSubmit = () => {
    const { title, team } = this.state;
    if (title.length === 0 || team.length === 0) {
      return false;
    }
    return true;
  }

  addNewTopic = () => {
    const newTopic = this.props.firebase.topics().push();
    const { title, team, progress } = this.state;
    if (this.validateSubmit()) {
      newTopic.set({
        id: newTopic.key,
        title: title,
        team: team,
        progress: progress,
      });

      this.handleHide();
    }
    else {
      this.setState({
        valid: false,
      })
    }
  };

  handleHide = () => {
    this.setState({
      modal: false,
      valid: true,
    })
  }

  handleShow = () => {
    this.setState({
      modal: true,
    })
  }

  onTextInput = (event: any) => {
    const target = event.currentTarget;
    this.setState(prevState => ({
      ...prevState,
      [target.name]: target.value,
    }))
  }

  onEnterKeyPress = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      this.addNewTopic();
    }
  }

  render() {
    const { modal, valid } = this.state;
    return (
      <div className="admin-new-topic-modal">
        <Button variant='success' onClick={this.handleShow}>New Topic</Button>
        <Modal show={modal} onHide={this.handleHide}>
          <Modal.Header closeButton>
            <Modal.Title>Create New Topic</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form onSubmit={this.addNewTopic} onKeyPress={this.onEnterKeyPress}>
            <Form.Group controlId="topicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control name="title" onChange={this.onTextInput} type="text" placeholder="Topic Title"/>
            </Form.Group>

            <Form.Group controlId="topicTeam">
              <Form.Label>Team</Form.Label>
              <Form.Control name="team" onChange={this.onTextInput} type="text" placeholder="Team" />
            </Form.Group>

            <Form.Group controlId="topicProgress">
              <Form.Label>Progress</Form.Label>
              <Form.Control name="progress" onChange={this.onTextInput} type="text" placeholder="What's going on?"/>
            </Form.Group>
          </Form>
          </Modal.Body>
          <Modal.Footer>
            { !valid ? <Alert color="danger">Please write the title and team of the topic</Alert> : null}
            <Button variant="primary" onClick={this.addNewTopic} type="submit">
              Save
            </Button>
            <Button variant="secondary" onClick={this.handleHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }

}

export default withFirebase(NewTopicModal);