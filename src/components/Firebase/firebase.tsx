import React from 'react';

import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

import { firebaseConfig } from './config';

export class Firebase extends React.Component<{}, {}> {
  db: app.database.Database;
  auth: app.auth.Auth;
  storage: app.storage.Storage;

  constructor(props: any) {
    super(props)

    app.initializeApp(firebaseConfig)
    this.db = app.database();
    this.auth = app.auth();
    this.storage = app.storage();
  }

  doSignInWithEmailAndPassword = (email: string, password: string) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  topics = () => this.db.ref('topics/');
  topic = (topicID: string) => this.db.ref(`topics/${topicID}/`);
}
