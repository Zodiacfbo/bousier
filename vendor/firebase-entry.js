// Sous-ensemble du SDK Firebase utilisé par le jeu (reconstruit avec esbuild, voir vendor/README.md)
export { initializeApp } from 'firebase/app';
export {
  getAuth, signInAnonymously, connectAuthEmulator,
  EmailAuthProvider, linkWithCredential, signInWithEmailAndPassword, signOut,
} from 'firebase/auth';
export {
  getFirestore, connectFirestoreEmulator, doc, getDoc, setDoc, collection, query, orderBy, limit, getDocs,
} from 'firebase/firestore/lite';
