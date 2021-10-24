import React, { useContext } from 'react';
import { ContextDash } from '../context/context';
const DropShadow = () => {
    const modalContext = useContext(ContextDash)
    const { DropShadowToggle, DropShadowClick,zindexShadow} = modalContext
    
    return ( 
        <div style={{zIndex:zindexShadow}} onClick={DropShadowClick} className={DropShadowToggle ? "dropShadow show" : "dropShadow"}>
        </div>
     );
}
 
export default DropShadow;