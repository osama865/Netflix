import React, { useContext } from 'react';
import { useState } from 'react';
import { Form } from '../components';
import FooterContainer from '../containers/footer';
import HeroContainer from '../containers/hero';
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../constants/routes';
import { useHistory } from 'react-router-dom';

export default function SignIn() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAdress, setEmailAdress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // the above states to check whether the email and the password is valid or not
  const isInValid = password === '' || emailAdress === '';
  const handleSignIn = (event) => {
    event.preventDefault();

    // auth part
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAdress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAdress('');
        setPassword('');
        setError(error.message);
      });
  };

  return (
    <>
      <HeroContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Text>Email</Form.Text>
            <Form.Input
              placeholder="Email Address"
              value={emailAdress}
              onChange={({ target }) => setEmailAdress(target.value)}
            />
            <Form.Text>Password</Form.Text>
            <Form.Input
              type="password"
              autoComplete="off"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit type="submit" disabled={isInValid}>
              Sign In
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New to netflix ? <Form.Link to="/signup"> Sign Up Now </Form.Link>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. Learn more.
            </Form.TextSmall>
          </Form.Text>
        </Form>
      </HeroContainer>
      <FooterContainer />
    </>
  );
}
