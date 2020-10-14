import React from 'react';
import BrowseContainer from '../containers/browse';
import { useContent } from '../hooks';
import selectionMap from '../utils/selection-map';

export default function Browse() {
  // need series and films
  // pass it to the browse container
  const { series } = useContent('series');
  const { films } = useContent('films');

  // slides
  const slides = selectionMap({ series, films });
  console.log(slides);
  return <BrowseContainer slides={slides} />;
}
