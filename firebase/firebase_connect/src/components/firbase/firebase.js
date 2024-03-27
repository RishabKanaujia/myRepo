
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAtYqEb6s-rWAiN0y141qr8LDlJQrpekb4",
  authDomain: "pro-test-93f97.firebaseapp.com",
  projectId: "pro-test-93f97",
  storageBucket: "pro-test-93f97.appspot.com",
  messagingSenderId: "47311256006",
  appId: "1:47311256006:web:f739a96c5ef4b7caf05ac7",
  databaseURL:"https://pro-test-93f97-default-rtdb.firebaseio.com/"
};


export const app = initializeApp(firebaseConfig);