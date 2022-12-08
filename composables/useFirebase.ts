// https://firebase.google.com/docs/auth/web/start

import { async } from "@firebase/util";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithPhoneNumber,
  RecaptchaVerifier,
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

export const resetEmail=async (email: string)=>{
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


const auth = getAuth();

(window as any).recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
}, auth);


export const getNumber = async (number: string) =>{
    const appVerifier = (window as any).recaptchaVerifier;
   const userAccesss = await signInWithPhoneNumber(auth, number,appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        if(!process.client){
          (window as any).confirmationResult = confirmationResult;

          alert("code sent")
        }
       
        // ...
      }).catch((error) => {
        // Error; SMS not sent
        // ...
        console.log(error)
      });
      return userAccesss

  }

  export const getCode =  (code: any)=>{

       (window as any).confirmationResult.confirm(code).then((result: { user: any; }) => {
        // User signed in successfully.
        const user = result.user;
        alert(user)
        // ...
      }).catch((error: any) => {
        // User couldn't sign in (bad verification code?)
        console.log(error)
        // ...
      });
  }
