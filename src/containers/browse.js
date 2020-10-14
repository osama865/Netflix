import React, { useContext, useEffect, useState } from 'react';
import selectionMap from '../utils/selection-map';
import SelectProfileContainer from './profile';
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../constants/routes';
import { Hero, Loading } from '../components';
import logo from '../logo.svg';

export default function BrowseContainer({ slides }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(profile);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

      <Hero src="joker1" dontShowOnSmallViewPort>
        <Hero.Frame>
          <Hero.Group>
            <Hero.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            <Hero.TextLink>series</Hero.TextLink>
            <Hero.TextLink>films</Hero.TextLink>
          </Hero.Group>
          <Hero.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Hero.Profile>
              <Hero.Picture src={user.photoURL} />
              <Hero.Dropdown>
                <Hero.Group>
                  <Hero.Picture src={user.photoURL} />
                  <Hero.TextLink>{user.displayName}</Hero.TextLink>
                </Hero.Group>
                <Hero.TextLink
                  onClick={() => {
                    firebase.auth().signOut();
                  }}
                >
                  Sign Out
                </Hero.TextLink>
              </Hero.Dropdown>
            </Hero.Profile>
          </Hero.Group>
        </Hero.Frame>

        <Hero.Feature>
          <Hero.FeatureCallOut>Watch joker now</Hero.FeatureCallOut>
          <Hero.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </Hero.Text>
        </Hero.Feature>
      </Hero>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
