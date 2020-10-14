import React from 'react';
import { Link, Link as ReactRouterLink } from 'react-router-dom';
import {
  Background,
  Logo,
  Text,
  Container,
  Group,
  ButtonLink,
  Feature,
  FeatureCallOut,
  Picture,
  Dropdown,
  Profile,
  Search,
  SearchIcon,
  SearchInput,
} from './styles/hero';

export default function Hero({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Hero.Frame = function HeroFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Hero.Group = function HeroGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Hero.FeatureCallOut = function HeroFeatureCallOut({ children, ...restProps }) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Hero.Feature = function HeroFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};

Hero.Text = function HeroText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Hero.TextLink = function HeroTextLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Hero.Logo = function HeroLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

Hero.ButtonLink = function HeroButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Hero.Picture = function HeroPicture({ children, ...restProps }) {
  return <Picture {...restProps}>{children}</Picture>;
};

Hero.ButtonLink = function HeroButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Hero.Dropdown = function HeroDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Hero.Profile = function HeroProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Hero.SearchTerm = function HeroSearchTerm({
  searchTerm,
  setSearchTerm,
  ...restProps
}) {
  const [searchActiv, setSearchActiv] = useState(false);
  return (
    <Search>
      <SearchIcon onClick={() => setSearchActiv((searchActiv) => !searchActiv)}>
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        placeholder="Search films and series"
        active={searchActiv}
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
      />
    </Search>
  );
};
