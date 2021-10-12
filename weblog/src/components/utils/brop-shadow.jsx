import React from 'react';
const DropShadow = ({click,toggleShow}) => {
    return ( 
        <div onClick={click} className={toggleShow?"dropShadow show":"dropShadow"}>
        </div>
     );
}
 
export default DropShadow;