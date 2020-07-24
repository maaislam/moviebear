
import {fire} from './Fire'

var provider = new fire.auth.GoogleAuthProvider();


fire.auth().signInWithRedirect(provider);
