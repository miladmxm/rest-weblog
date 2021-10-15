import { createContext } from "react";

export const ContextDash = createContext({
    DropShadowToggle : false,
    DropShadowClick : () => { },
    setDropShadowToggle: () => { },
    toggleSide: false,
    setToggleSide: () => { },
    
})
