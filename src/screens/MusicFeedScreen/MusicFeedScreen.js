import React from 'react';
import useRedirectUser from '../../hooks/useRedirectUser';

const MusicFeedScreen = () => {

  useRedirectUser();

  return (
    <div>
      Página com todas as músicas
    </div>
  );
};

export default MusicFeedScreen;