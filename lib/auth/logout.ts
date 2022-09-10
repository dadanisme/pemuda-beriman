import { getAuth, signOut } from "firebase/auth";
import app from "../firebase";

export default async function logout() {
  const auth = getAuth(app);
  let logout = false;
  await signOut(auth)
    .then(() => {
      logout = true;
    })
    .catch(() => {
      logout = false;
    });
  return logout;
}
