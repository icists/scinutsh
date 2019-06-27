import { Firebase } from './firebase';
import { FirebaseContext, withFirebase } from './context';

export interface IFirebaseProps {
  firebase: Firebase;
}

export interface IFirebaseState {
  firebaseLoaded: boolean;
}

export { FirebaseContext, withFirebase };
export default Firebase;
