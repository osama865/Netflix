import React from 'react';
import { Hero } from '../components';
import * as ROUTES from '../pages';
import logo from '../logo.svg';
export default function HeroContainer({ children }) {
  return (
    <>
      <Hero>
        <Hero.Frame>
          <Hero.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
          <Hero.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Hero.ButtonLink>
        </Hero.Frame>
        {children}
      </Hero>
    </>
  );
}
{
  /* <Hero.Image src='/images/films/children/despicable-me/large.jpg'/>
<Hero>
  <Banner title='luxurious rooms' subtitle='deluxe rooms starting at $299'>
    <Link to='/rooms' className='btn-primary'>
      our rooms
    </Link>
  </Banner>
</Hero>; */
}

{
  /* <Hero.Image src='/images/films/children/despicable-me/large.jpg'/>
                        
                     */
}
