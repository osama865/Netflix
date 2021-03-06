import React, { useContext, useEffect, useState } from 'react';
import selectionMap from '../utils/selection-map';
import SelectProfileContainer from './profile';
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../constants/routes';
import { Hero, Loading, Card, Player } from '../components';
import FooterContainer from '../containers/footer';
import logo from '../logo.svg';
import Fuse from 'fuse.js';

export default function BrowseContainer({ slides }) {
  const [category, setCategory] = useState('films');
  const [searchTerm, setSearchTerm] = useState('');
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [slidesRows, setSlidesRows] = useState([]);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    console.log(profile);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  useEffect(() => {
    setSlidesRows(slides[category]);
    return () => {};
  }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slidesRows, {
      keys: ['data.description', 'data.title', 'data.genre'],
    });
    const results = fuse.search(searchTerm).map(({ item }) => item);

    if (slidesRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlidesRows(results);
    } else {
      setSlidesRows(slides[category]);
    }
  }, [searchTerm]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

      <Hero src="joker1" dontShowOnSmallViewPort>
        <Hero.Frame>
          <Hero.Group>
            <Hero.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
            <Hero.TextLink
              activ={category === 'series' ? 'true' : 'false'}
              onClick={() => setCategory('series')}
            >
              series
            </Hero.TextLink>
            <Hero.TextLink
              activ={category === 'films' ? 'true' : 'false'}
              onClick={() => setCategory('films')}
            >
              films
            </Hero.TextLink>
          </Hero.Group>
          <Hero.Group>
            <Hero.Search
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
                <Hero.Group>
                  <Hero.TextLink onClick={() => firebase.auth().signOut()}>
                    Sign Out
                  </Hero.TextLink>
                </Hero.Group>
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
          <Hero.PlayButton>Play</Hero.PlayButton>
        </Hero.Feature>
      </Hero>

      <Card.Group>
        {slidesRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature categroy={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
