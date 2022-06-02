import React, { useState } from 'react';

const VideoContext = React.createContext({});

export const VideoContextProvider = ({ children }) => {
  const [url, setUrl] = useState(null);

  return (
    <VideoContext.Provider
      value={{
        url,setUrl
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export default VideoContext;