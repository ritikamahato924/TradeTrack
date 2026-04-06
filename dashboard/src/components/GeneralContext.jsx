import React from "react";
import { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
    openBuyWindow: (uid) => {},
    closeBuyWindow: (uid) => {},
});

export const GeneralContextProvider = (props) => {
    const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
    const [selectedStockUID, setSelectedStockUID] = useState("");

    const handleBuyOpenWindow = (uid) => {
        setIsBuyWindowOpen(true);
        setSelectedStockUID(uid);
    };

    const handleCloseBuyWindow = (uid) => {
        setIsBuyWindowOpen(false);
        setSelectedStockUID("");
    };

    return (
        <GeneralContext.Provider
        value = {{
            openBuyWindow : handleBuyOpenWindow,
            closeBuyWindow : handleCloseBuyWindow,
        }}
        >
        {props.children}
        {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID}/>}
        </GeneralContext.Provider>
    );
};

export default GeneralContext;