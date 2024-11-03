import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "AIzaSyBApYxJg3uPffuS96x7qmvDcmogXHFS2C8",
  authDomain: "calcarbono.firebaseapp.com",
  projectId: "calcarbono",
  storageBucket: "calcarbono.firebasestorage.app",
  messagingSenderId: "580251557633",
  appId: "1:580251557633:web:9b0aa777b994be864c4500"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { auth };
