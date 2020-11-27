import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import SignInForm from './SignInForm';
 
const SignInPage = () => (
  <div>
    <SignIn/>
  </div>
);
const SignIn = withFirebase(SignInForm);
export default SignInPage;