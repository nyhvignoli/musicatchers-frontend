import React from 'react';
import useRedirectUser from '../../hooks/useRedirectUser';

const CreateMusicScreen = () => {
  useRedirectUser();
  
  return (
    <div>
        Página para adicionar música
    </div>
  );
};

export default CreateMusicScreen;