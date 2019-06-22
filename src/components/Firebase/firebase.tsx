import React from 'react';

import app from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

import { firebaseConfig } from './config';

export class Firebase extends React.Component<{}, {}> {
  db: app.database.Database;
  storage: app.storage.Storage;

  constructor(props: any) {
    super(props)

    app.initializeApp(firebaseConfig)
    this.db = app.database();
    this.storage = app.storage();
  }

  topics = () => {
    return this.db.ref('topics/');
  }
}
