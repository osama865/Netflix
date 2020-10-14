import React from 'react';
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
  return (
    <div>
      <p>hello from browse</p>
    </div>
  );
}
