import "../styles/globals.css";
import Layout from "../components/layout";
import type { AppProps } from "next/app";
import store from "../store";
import { Provider } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../lib/firebase";
import { login, logout } from "../store/slices/user";
import { useRouter } from "next/router";
import toastr from "../lib/toastr";

function MyApp({ Component, pageProps }: AppProps) {
  const auth = getAuth(app);
  const router = useRouter();

  const publicPages = ["/login", "/register"];
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const userObj = user.toJSON();
      store.dispatch(login(userObj));
    } else {
      if (!publicPages.includes(router.pathname)) {
        toastr("You need to login first", "error");
        store.dispatch(logout());
        router.push("/login");
      }
    }
  });

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
