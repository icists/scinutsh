import React from 'react';
import { IFirebaseProps, withFirebase } from '../Firebase';

class BoardBase extends React.Component<IFirebaseProps, {}> {
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <p>
        This is a board for cards
      </p>
    )
  }
}

const Board = withFirebase(BoardBase);

export default Board;
