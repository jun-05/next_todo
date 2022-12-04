import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useToggle } from './../../hooks/useToggle';
import { useAuthForm } from './hooks';

const AuthTestRole = (isSignIn: boolean): Record<string, string> => {
  return isSignIn
    ? {
        headText: 'Login to your account',
        Question: `Don't have account? `,
        changeText: ' Sign up here',
        buttonText: 'Sign in account',
      }
    : {
        headText: 'create to your account',
        Question: `Do you have account?`,
        changeText: ' Sign in here',
        buttonText: 'Create my account',
      };
};

const Auth = () => {
  const [isSignIn, signToggle] = useToggle(true);
  const [isViewPWd, viewToggle] = useToggle();
  const [form, onChangeInput] = useAuthForm();

  return (
    <div className=" h-screen bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-4">
      <div className="h-full flex flex-col items-center justify-center">
        <div className="text-3xl text-center font-bold text-slate-200">My_Tasks_APP</div>
        <div className="bg-white shadow rounded  sm:w-[640px] w-full p-10 mt-16">
          <p className="text-2xl font-extrabold leading-6 text-gray-800">
            {AuthTestRole(isSignIn).headText}
          </p>
          <p className="text-sm mt-4 font-medium leading-none text-gray-500">
            {AuthTestRole(isSignIn).Question}
            <span
              tabIndex={0}
              aria-label="Sign up here"
              className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer"
              onClick={signToggle}
            >
              {AuthTestRole(isSignIn).changeText}
            </span>
          </p>
          <button
            aria-label="Continue with google"
            role="button"
            className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10"
          >
            <Image src="/auth/google.svg" alt="google Logo" width={19} height={20} />
            <p className="text-base font-medium ml-4 text-gray-700">Continue with Google</p>
          </button>
          <button
            aria-label="Continue with github"
            role="button"
            className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4"
          >
            <Image src="/auth/gitHub.svg" alt="google Logo" width={21} height={20} />
            <p className="text-base font-medium ml-4 text-gray-700">Continue with Github</p>
          </button>

          <div className="w-full flex items-center justify-between py-5">
            <hr className="w-full bg-gray-400" />
            <p className="text-base font-medium leading-4 px-2.5 text-gray-400">OR</p>
            <hr className="w-full bg-gray-400  " />
          </div>
          <div>
            <label className="text-sm font-medium leading-none text-gray-800">Email</label>
            <input
              name="email"
              aria-label="enter email adress"
              role="input"
              type="email"
              value={form.email}
              onChange={onChangeInput}
              className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            />
          </div>
          <div className="mt-6  w-full">
            <label className="text-sm font-medium leading-none text-gray-800">Password</label>
            <div className="relative flex items-center justify-center">
              <input
                name="password"
                aria-label="enter Password"
                role="input"
                type={isViewPWd ? 'text' : 'password'}
                value={form.password}
                onChange={onChangeInput}
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
              <div className="absolute right-0 mt-2 mr-3 cursor-pointer" onClick={viewToggle}>
                <Image
                  src={isViewPWd ? '/auth/eye.svg' : '/auth/eyeSlash.svg'}
                  alt="eye svg"
                  width={16}
                  height={16}
                />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <button
              role="button"
              aria-label="create my account"
              className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
            >
              {AuthTestRole(isSignIn).buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
