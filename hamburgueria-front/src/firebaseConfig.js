import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCWq0X0ThU4AG_259p9tDaHS3pZQcYmfzs",
  authDomain: "af-web-5068f.firebaseapp.com",
  projectId: "af-web-5068f",
  storageBucket: "af-web-5068f.appspot.com",
  messagingSenderId: "457413412127",
  appId: "1:457413412127:web:fe737de4875aea95e55c2a",
  measurementId: "G-5MV743CERQ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;