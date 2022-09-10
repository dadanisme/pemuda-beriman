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
import SplashLoading from "../components/SplashLoading";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const auth = getAuth(app);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  const publicPages = ["/login", "/register"];

  (async () => {
    if (typeof window !== "undefined" && !user && loading) {
      await onAuthStateChanged(auth, (user) => {
        if (user) {
          const userObj = user.toJSON();
          setUser(userObj);
          store.dispatch(login(userObj));
        } else {
          if (!publicPages.includes(router.pathname)) {
            toastr("You need to login first", "error");
            store.dispatch(logout());
            router.push("/login");
          }
        }
        setLoading(false);
        console.clear();
      });
    }
  })();
  if (!user && loading) {
    return <SplashLoading />;
  } else {
    return (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }
}

export default MyApp;
