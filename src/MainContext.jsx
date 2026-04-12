import React, { Children, createContext } from 'react';
 export const AppContext =createContext() 


const MainContext = ({children}) => {
    const hello = 'this is app context'
    return (
        <AppContext.Provider value={hello}>
            {children}
        </AppContext.Provider>
       
    );
};

export default MainContext;