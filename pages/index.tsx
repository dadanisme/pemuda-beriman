import type { NextPage } from "next";
import Head from "next/head";
// import toastr from "../lib/toastr";
// import { useRouter } from "next/router";
// import { useSelector } from "react-redux";
// import { useEffect, useState } from "react";
import ReactLoading from "react-loading";

const Home: NextPage = () => {
  // const router = useRouter();
  // const { user } = useSelector((state: any) => state.user);

  return (
    <div>
      <Head>
        <title>Pemuda Beriman | -1 Gold Lane</title>
      </Head>
      <div
        className="p-4 h-minus-header flex flex-col items-center justify-center transition-all duration-1000 
      bg-main-gray select-none"
      >
        <h2 className="text-5xl text-center font-bold text-main-red">
          Iman Technologies
        </h2>
        <h3 className="text-3xl text-gray-600">Software House</h3>
        <ReactLoading type="bubbles" color="#000" height={100} width={100} />
        {/* <p className="text-center">
          Your name: {user?.displayName} | Your email: {user?.email}
        </p> */}
      </div>
      {/* <button className="bg-red-600 p-3" onClick={handleLogout}>
        Logout
      </button> */}
    </div>
  );
};

export default Home;
