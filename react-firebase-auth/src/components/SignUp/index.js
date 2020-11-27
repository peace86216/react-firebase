import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {compose} from 'recompose';
import SignUpForm from './SignUpForm';
import * as ROUTES from '../../constants/routes';
import {withFirebase} from '../Firebase';
const SignUpPage = () => (
  <div>
      <SignUp/>
  </div>
);
 
const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUp = withFirebase(SignUpForm);
export default SignUpPage;
 
export { SignUpForm, SignUpLink };