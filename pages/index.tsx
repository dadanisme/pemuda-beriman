import type { NextPage } from "next";
import Head from "next/head";
import { logout } from "../lib/auth";
import toastr from "../lib/toastr";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const handleLogout = async () => {
    const isLogout = await logout();
    if (isLogout) {
      toastr("Logout successfully", "success");
      router.push("/login");
    } else {
      toastr("Logout failed", "error");
    }
  };

  return (
    <div>
      <Head>
        <title>Pemuda Beriman | -1 Gold Lane</title>
      </Head>
      <h1>Home</h1>
      <button className="bg-red-600 p-3" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Home;
