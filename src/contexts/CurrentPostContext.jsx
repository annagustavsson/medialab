import React, { useState, useContext} from 'react';

const CurrentPostContext = React.createContext();

export const useCurrentPost = () => {
    return useContext(CurrentPostContext);
  };

const CurrentPostContextProvider = ({ children }) => {
    const [currentPost, setCurrentPost] = useState(null) 

    return (
        <CurrentPostContext.Provider
            value={{
            currentPost: currentPost, 
            setCurrentPost: setCurrentPost,
            }}
      >
        {children}
      </CurrentPostContext.Provider>
    )
}

export default CurrentPostContextProvider
