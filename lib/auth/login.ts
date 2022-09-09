import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function login(email: string, password: string) {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      return {
        success: true,
        user,
      };
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return {
        success: false,
        errorCode,
        errorMessage,
      };
    });
}
