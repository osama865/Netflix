import React, { useContext } from 'react';
import { useState } from 'react';
import { Form } from '../components';
import FooterContainer from '../containers/footer';
import HeroContainer from '../containers/hero';
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../constants/routes';
import { useHistory } from 'react-router-dom';

export default function SignUp() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAdress, setEmailAdress] = useState('');
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // the above states to check whether the email and the password is valid or not
  const isInValid = firstName === '' || password === '' || emailAdress === '';
  const handleSignUp = (event) => {
    event.preventDefault();

    // auth part
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAdress, password)
      .then((result) => {
        //
        result.user.updateProfile({
          displayName: firstName,
          photoURL: Math.floor(Math.random() * 5) + 1,
        });
      })
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setFirstName('');
        setEmailAdress('');
        setPassword('');
        setError(error.message);
      });
  };

  return (
    <>
      <HeroContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Text>First Name</Form.Text>
            <Form.Input
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />

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
              Sign Up
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Alradeay have one ? <Form.Link to="/signin"> Sign In</Form.Link>
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
