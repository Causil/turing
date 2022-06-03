import React, { useState } from 'react';
import Cookies from 'js-cookie';
const VideoContext = React.createContext({});

export const VideoContextProvider = ({ children }) => {
  const [url, setUrl] = useState(null);
  const [data, setData] = useState(() => {
    const cookie = Cookies.get('Data');
    return cookie ? JSON.parse(cookie).data : null;
  });

  return (
    <VideoContext.Provider
      value={{
        url,setUrl,
        data, setData
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export default VideoContext;