import React from "react";

const Form = () => {
  return (
    <div className="w-2/3">
      <div className="h-1/3 p-10 bg-gray-200">
        <h3 className="w-4/5 mt-16 text-xl font-semibold text-gray-700">
          This is not a real online service! You know you need something like
          this in your life to help you realize your deepest dreams.
          <br />
          Sign up to get started.
          <br />
          <br />
          <h3>You know you want to.</h3>
        </h3>
      </div>
      <div className="bg-white h-1/3 p-10"></div>
      <div className="bg-gray-200 h-1/3 p-10">
        <button
          type="submit"
          className="py-2 px-8 bg-lime-900 text-white rounded"
        >
          Create Account
        </button>
        <p className="mt-6 font-medium text-gray-700">
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
