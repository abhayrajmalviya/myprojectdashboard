import React from 'react';
import { useStateContext } from '../contexts/ContextProvider'

const Footer = () => {
  const {currentColor} = useStateContext();

  return (
    <div className="mt-24">
      <p className="dark:text-gray-200 text-gray-700 text-center m-20">
        © 2022 All rights reserved 
        <a href="https://abhayraj-malviya.web.app/" style={{color:currentColor}}> Abhayraj Malviya</a>
      </p>
    </div>
  )
}

export default Footer;