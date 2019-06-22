import { Firebase } from './firebase';
import { FirebaseContext, withFirebase } from './context';

export interface IFirebaseProps {
  firebase: Firebase;
}

export { FirebaseContext, withFirebase };
export default Firebase;
