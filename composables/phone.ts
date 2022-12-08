
// import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

// const auth = getAuth();
// window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
//     recaptchaVerifier.render()
// }, auth);


// export const getNumber = async (number:any) =>{
// const appVerifier = window.recaptchaVerifier;
//  const userAccesss = await signInWithPhoneNumber(auth, number,appVerifier)
//     .then((confirmationResult) => {
//       // SMS sent. Prompt user to type the code from the message, then sign the
//       // user in with confirmationResult.confirm(code).
//       window.confirmationResult = confirmationResult;
//       alert("code sent")
//       // ...
//     }).catch((error) => {
//       // Error; SMS not sent
//       // ...
//       console.log(error)
//     });
//     return userAccesss
// }


// export const getCode = async (code:any)=>{
//    await confirmationResult.confirm(code).then((result: { user: any; }) => {
//       // User signed in successfully.
//       const user = result.user;
//       alert(user)
//       // ...
//     }).catch((error: any) => {
//       // User couldn't sign in (bad verification code?)
//       console.log(error)
//       // ...
//     });
// }


