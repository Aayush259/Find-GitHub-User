import React from 'react';

// Creating new context.
const HistoryContext = React.createContext();

// Provider component.
const HistoryContextProvider = ({children, value}) => {

    return (
        <HistoryContext.Provider value={value}>
            {children}
        </HistoryContext.Provider>
    );
};

export { HistoryContext, HistoryContextProvider };