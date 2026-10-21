// Sous-ensemble du SDK Firebase utilisé par le jeu (reconstruit avec esbuild, voir vendor/README.md)
export { initializeApp } from 'firebase/app';
export {
  getAuth, signInAnonymously, connectAuthEmulator,
  EmailAuthProvider, linkWithCredential, signInWithEmailAndPassword, createUserWithEmailAndPassword,
} from 'firebase/auth';
export {
  getFirestore, connectFirestoreEmulator, doc, getDoc, setDoc, deleteDoc, collection, query, where, orderBy, limit, getDocs,
} from 'firebase/firestore/lite';
