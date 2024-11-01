// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import {doc, getFirestore, setDoc} from 'firebase/firestore'
import { toast } from "react-toastify";

const firebaseConfig = {
    apiKey: "AIzaSyA_uzvz-uDcyD0Tak45cBQ9amTSf9YYEJE",
    authDomain: "chat-app-40965.firebaseapp.com",
    projectId: "chat-app-40965",
    storageBucket: "chat-app-40965.appspot.com",
    messagingSenderId: "989780613880",
    appId: "1:989780613880:web:2e3ac776f229de7c72790d",
    measurementId: "G-7LVKKHEZDT"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app)
const db=getFirestore(app)


const signup=async(username,email,password)=>{
    try {
        const res=await createUserWithEmailAndPassword(auth,email,password)
        const user=res.user;
        await setDoc(doc(db,"users",user.uid),{
            id:user.uid,
            username:username.toLowerCase(),
            email,
            name:"",
            avatar:"",
            bio:"hey there i am using chatgpt",
            lastSeen:Date.now()

        })

        await setDoc(doc(db,"chats",user.uid),{
            chatData:[]
        })
    } catch (error) {
        console.log(error)
        toast.error(error.code.split("/")[1].split('-').join(" "))
    }
}

const login=async(email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.log(error)
        toast.error(error.code.split("/")[1].split('-').join(" "))
    }
}



export {signup,login}