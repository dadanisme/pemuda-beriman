import type { NextPage } from "next";
import Head from "next/head";

const Profile: NextPage = () => {
  return (
    <div className="bg-main-gray">
      <Head>
        <title>Profile | Pemuda Beriman</title>
      </Head>
      <div>
        <h1 className="text-2xl font-bold text-center">Profile</h1>
      </div>
    </div>
  );
};

export default Profile;
