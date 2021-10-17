import React, { useContext } from 'react';
import { ContextDash } from '../context/context';
const DropShadow = ({zindex = 100}) => {
    const modalContext = useContext(ContextDash)
    const { DropShadowToggle, DropShadowClick} = modalContext
    
    return ( 
        <div style={{zIndex:zindex}} onClick={DropShadowClick} className={DropShadowToggle ? "dropShadow show" : "dropShadow"}>
        </div>
     );
}
 
export default DropShadow;