import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
  Background,
  Logo,
  Container,
  Frame,
  Group,
  ButtonLink,
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
