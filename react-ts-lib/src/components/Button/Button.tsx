import React, { FC, useEffect } from 'react';

import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps>  = ({ type, text, onClick }) => {

  useEffect(() => {
    console.log("working")
  }, [])

  return (
    <button type="button" className={`Button Button-${type}`} onClick={onClick}>
      {text}
    </button>
  )
};

export default Button;
