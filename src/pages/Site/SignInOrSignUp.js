import React from 'react';
import Layout from '.';

const SignOrSignUp = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default SignOrSignUp;
