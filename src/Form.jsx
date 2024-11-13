import React from "react";

const Form = () => {
  return (
    <div className="w-2/3">
      <div className="h-1/3 p-10 bg-gray-200">
        <h3 className="w-4/5 mt-16 text-xl font-semibold text-gray-600">
          This is not a real online service! You know you need something like
          this in your life to help you realize your deepest dreams.
          <br />
          Sign up to get started.
          <br />
          <br />
          <h3>You know you want to.</h3>
        </h3>
      </div>
      <div className="bg-white h-1/3 p-10">
        <h3 className="text-xl font-semibold text-gray-600 mb-4">
          Let's do this!
        </h3>
        <form className="w-4/6 flex justify-between">
          <div>
            {" "}
            <label className="flex flex-col text-gray-500 text-xs font-semibold">
              FIRST NAME
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-56 rounded border-2 py-1 focus:outline-none focus:border-t-indigo-600  focus:ring-1 focus:ring-indigo-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200"
                required
                aria-required="true"
              />
            </label>
            <label className="flex flex-col text-gray-500 font-semibold text-xs my-4">
              EMAIL
              <input
                type="email"
                id="email"
                name="email"
                className="w-56 rounded border-2 py-1 focus:outline-none focus:border-t-indigo-600  focus:ring-1 focus:ring-indigo-500"
                required
                aria-required="true"
              />
            </label>
            <label className="flex flex-col text-gray-500 font-semibold text-xs">
              PASSWORD
              <input
                type="password"
                id="password"
                name="password"
                className="w-56 rounded border-2 py-1 focus:outline-none focus:border-t-indigo-600  focus:ring-1 focus:ring-indigo-500 "
                required
                aria-required="true"
              />
            </label>
          </div>
          <div>
            <label className="flex flex-col text-gray-500 font-semibold text-xs">
              LAST NAME
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-56 rounded border-2 py-1 focus:outline-none focus:border-t-indigo-600  focus:ring-1 focus:ring-indigo-500 "
                required
                aria-required="true"
              />
            </label>
            <label className="flex flex-col text-gray-500 font-semibold text-xs my-4">
              PHONE NUMBER
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="w-56 rounded border-2 py-1 focus:outline-none focus:border-t-indigo-600  focus:ring-1 focus:ring-indigo-500 "
                required
                aria-required="true"
              />
            </label>
            <label className="flex flex-col text-gray-500 font-semibold text-xs">
              CONFIRM PASSWORD
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-56 rounded border-2 py-1 focus:outline-none focus:border-t-indigo-600  focus:ring-1 focus:ring-indigo-500"
                required
                aria-required="true"
              />
            </label>
          </div>
        </form>
      </div>
      <div className="bg-gray-300 h-1/3 p-10">
        <button
          type="submit"
          className="py-3 px-12 bg-lime-900 text-white rounded"
        >
          Create Account
        </button>
        <p className="mt-6 font-medium text-gray-600">
          Already have an account?{" "}
          <button type="button" className="text-lime-900 font-semibold">
            Log in
          </button>
        </p>
      </div>
    </div>
  );
};

export default Form;
