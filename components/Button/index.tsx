import React from 'react'

interface Button {
    name: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  }
const Button: React.FC<Button> = ({name, type = 'button', onClick}) => {
  return (
    <div className='mb-3 saveBtn'>
      <button className='btn btn-primary' type={type} onClick={onClick}>
          {name}
      </button>
    </div>
  )
}

export default Button