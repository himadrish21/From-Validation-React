import React, { useState } from 'react'
import '../font/Library'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function UsePasswordToggle() {
    let [visible,setVisible]=useState(false)
    let icons = (<FontAwesomeIcon icon={visible? "eye-slash" :"eye"} 
     onClick={()=>{
        setVisible(visiblity=>!visiblity)
     }} size="1x"  style={{color: "rgba(128, 128, 128, 0.5)"}}/>
     );
    let inputType= visible? "text": "password";
  return [inputType,icons];
}

export default UsePasswordToggle;