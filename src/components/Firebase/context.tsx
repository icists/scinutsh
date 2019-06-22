import React from 'react';
import Firebase from '.';

export const FirebaseContext = React.createContext<Firebase | null>(null);

export const withFirebase = (Component: any) => (props: any) => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase}/>}
  </FirebaseContext.Consumer>
)