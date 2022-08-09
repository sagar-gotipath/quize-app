import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAGZygKIaFuD8xPQ1xtkJu5qHERm43qQl8',
  authDomain: 'gotipath-quiz.firebaseapp.com',
  projectId: 'gotipath-quiz',
  storageBucket: 'gotipath-quiz.appspot.com',
  messagingSenderId: '202796796994',
  appId: '1:202796796994:web:ac1ff53a4eb3964a6431db',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
