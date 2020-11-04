import React from 'react';

const SignOrSignUp = () => {
  return (
    <div>
      <h1>Sign-In / Sign-Up</h1>

      <button
        name='sign-in'
        onClick={() => {
          window.location.href = '/learner';
        }}
      >
        Sign-In
      </button>
      <button name='sign-up'>Sign-Up</button>
    </div>
  );
};

export default SignOrSignUp;
