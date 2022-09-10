import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase";

export default async function register(email: string, password: string) {
  const auth = getAuth(app);

  let result: {
    success: boolean;
    user?: Object;
    errorCode?: string;
    errorMessage?: string;
  } = {
    success: false,
  };

  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      result = {
        success: true,
        user,
      };
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      result = {
        success: false,
        errorCode,
        errorMessage,
      };
    });
}
