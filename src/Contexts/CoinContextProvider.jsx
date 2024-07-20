import React, { createContext, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = ({ children }) => {
    const [isOpen, setIsopen] = useState(true);

    const propIzeh = { isOpen, setIsopen };

    return (
        <CoinContext.Provider value={propIzeh}>{children}</CoinContext.Provider>
    );
};

export default CoinContextProvider;
