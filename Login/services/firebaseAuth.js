// Import the functions you need from the SDKs you need
import { initializeApp ,getApps} from "firebase/app";
import {initializeAuth,getReactNativePersistence, getAuth} from "firebase/auth"
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvsAm70u1Pp39yKxrhoDBK9MRGjkyTlGQ",
  authDomain: "first-project-c1fe8.firebaseapp.com",
  projectId: "first-project-c1fe8",
  storageBucket: "first-project-c1fe8.appspot.com",
  messagingSenderId: "326042896988",
  appId: "1:326042896988:web:703887aa70e16f2053b499"
};

// Initialize Firebase
let auth
if(getApps.length ==0){
    const app = initializeApp(firebaseConfig);
    auth= initializeAuth(app,{
    persistence:getReactNativePersistence(ReactNativeAsyncStorage)
})

}
else{
   auth= getAuth()
}


export default auth 