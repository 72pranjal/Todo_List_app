// https://firebase.google.com/docs/auth/web/start

import { async } from "@firebase/util";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";

export const createUser = async (email:string, password:string) => {
  const auth = getAuth();
  const data = await createUserWithEmailAndPassword(
    auth,
    email,
    password,
  ).catch((error) => {
    const errorCode = error.code;
   const errorMessage = error.message;
  });
  return data
};

export const signInUser = async (email:string, password:string) => {
  const auth = getAuth();
  const credentials = await signInWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  return credentials;
};

export const resetEmail=async (email)=>{
   const auth=getAuth();
   const credentials=await sendPasswordResetEmail(auth,email)
  //  .then(()=>{
    alert('emali reset link send')
  //  })
  //  .catch((error)=>{
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //  })
   return credentials
}

export const initUser = async () => {
  const auth = getAuth();
  const firebaseUser:any=useFirebaseUser();
  firebaseUser.value=auth.currentUser
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      console.log('Auth changed',user)
      firebaseUser.value=user;
    } else {
     
    console.log('Auth changed',user)
   
    }
    firebaseUser.value=user
  });
 
};
export const signOutUser=async()=>{
  const auth=getAuth();
  const result =await auth.signOut();
  console.log('sign out',result)
  return result;
}
