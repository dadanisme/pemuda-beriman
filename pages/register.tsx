import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { MouseEventHandler, Suspense, useState } from "react";
import Link from "next/link";
import { login } from "../lib/auth";

const SideImage = dynamic(() => import("../components/login/SideImage"), {
  ssr: false,
});

const Register: NextPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePassword: MouseEventHandler<HTMLButtonElement> = () => {
    setShowPassword(!showPassword);
  };

  // prettier-ignore
  const handleSubmit: MouseEventHandler<HTMLFormElement> = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    const res = await login(email, password);
    
    if(res.success) {
      window.location.href = "/";
    } else {
      alert(res.errorMessage);
    }

  };

  return (
    <div>
      <Head>
        <title>Register | Pemuda Beriman</title>
      </Head>
      <div className="h-screen flex items-center justify-center bg-main-gray p-4 sm:p-12">
        <form
          className="w-full md:w-1/2 bg-white px-6 md:px-12 py-12 rounded-lg md:rounded-none border md:border-none shadow-md
          relative md:absolute md:left-0 md:h-full md:flex flex-col justify-center transition-all duration-300"
          onSubmit={handleSubmit}
        >
          <div className="mb-6 md:text-center">
            <h1 className="font-bold text-2xl">Pemuda Beriman Platform</h1>
            <p className="text-sm text-gray-400 mb-2">
              Join to our great community
            </p>
            <hr />
          </div>

          <div className="mb-4 md:mb-2">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-main-red focus:border-main-red block w-full p-2.5 dark:bg-gray-700 
              dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main-red 
              dark:focus:border-main-red"
              placeholder="pemuda@beriman.com"
              required
            />
          </div>

          <div className="mb-2">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300"
            >
              Password
            </label>
            <div className="flex justify-end">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-main-red focus:border-main-red block w-full p-2.5 dark:bg-gray-700 
                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main-red 
                dark:focus:border-main-red pr-10"
                required
              />
              <div className="absolute">
                <button
                  className="relative top-2.5 right-3 cursor-pointer"
                  onClick={togglePassword}
                  type="button"
                >
                  {showPassword ? <EyeIcon /> : <EyeOffIcon />}
                </button>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="re-password"
              className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300"
            >
              Retype Password
            </label>
            <div className="flex justify-end">
              <input
                type={showPassword ? "text" : "password"}
                id="re-password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-main-red focus:border-main-red block w-full p-2.5 dark:bg-gray-700 
                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main-red 
                dark:focus:border-main-red pr-10"
                required
              />
              <div className="absolute">
                <button
                  className="relative top-2.5 right-3 cursor-pointer"
                  onClick={togglePassword}
                  type="button"
                >
                  {showPassword ? <EyeIcon /> : <EyeOffIcon />}
                </button>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-main-red hover:bg-red-700 focus:ring-4 
            focus:outline-none focus:ring-main-pink font-medium rounded-lg text-sm 
            w-full md:w-auto px-5 py-3 text-center dark:bg-red-600 active:bg-main-yellow
            active:text-gray-700
            dark:hover:bg-main-red dark:focus:ring-main-red"
          >
            Register
          </button>
          <div className="mt-4">
            <p className="text-sm text-gray-400 md:text-center">
              Already have an account?{" "}
              <Link href="/login">
                <a
                  className="text-main-red hover:text-main-red font-semibold
                dark:text-main-red dark:hover:text-main-red"
                >
                  Login
                </a>
              </Link>
            </p>
          </div>
        </form>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <SideImage />
      </Suspense>
    </div>
  );
};

export default Register;

const EyeIcon: React.FC = () => {
  return (
    <svg
      className="w-5 h-5"
      fill="rgb(75 85 99)"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
      <path
        fillRule="evenodd"
        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const EyeOffIcon: React.FC = () => {
  return (
    <svg
      className="w-5 h-5"
      fill="rgb(75 85 99)"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
        clipRule="evenodd"
      />
      <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
    </svg>
  );
};
