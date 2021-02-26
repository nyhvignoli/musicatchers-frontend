import React from 'react';
import useRedirectUser from '../../hooks/useRedirectUser';
import { useParams } from 'react-router-dom';

const MusicDetailsScreen = () => {

  useRedirectUser();

  return (
    <div>
      Página de detalhes da música escolhida
    </div>
  );
};

export default MusicDetailsScreen;