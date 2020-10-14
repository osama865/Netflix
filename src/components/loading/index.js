import React from 'react';
import { LockBody, Picture, ReleaseBody, Spinner } from './styles/loading';

export default function Loading({ src, ...restProps }) {
  return (
    <Spinner>
      <LockBody>
        <Picture src={`/image/users/${src}.png`} />
      </LockBody>
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
