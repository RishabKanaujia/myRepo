
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBxeNntRxrS4H_79tSj4JR_JHdHWx3x278",
  authDomain: "imagecollector-5bb56.firebaseapp.com",
  projectId: "imagecollector-5bb56",
  storageBucket: "imagecollector-5bb56.appspot.com",
  messagingSenderId: "810651458694",
  appId: "1:810651458694:web:419f2df56310cdcf644507",
  measurementId: "G-NPNENB5KNG"
};


const app = initializeApp(firebaseConfig);
const imgDB = getStorage(app)
export{imgDB}
