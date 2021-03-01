import React from 'react';
import useRedirectUser from '../../hooks/useRedirectUser';
import { useRequestData } from '../../hooks/useRequestData';
import { useParams } from 'react-router-dom';
import{ BASE_URL, axiosConfig } from '../../constants/requestConfig';

const MusicDetailsScreen = () => {

  useRedirectUser();

  const params = useParams();
  const { data, getData } = useRequestData(`${BASE_URL}/music/${params.id}`, axiosConfig, undefined);
  console.log(data);

  return (
    <div>
        {data ? 
          <div>
            <h2>{data.title}</h2>
            <audio 
              controls
              src={data.file}
            />
          </div> : 
        null}
    </div>
    
  );
};

export default MusicDetailsScreen;