import React from 'react'

interface FormProps {
    children: React.ReactNode;
    onSubmit: React.FormEventHandler;
  }

const Form:React.FC<FormProps> = ({children, onSubmit}) => {
  return (
    <div className='container'>
      <div className="commonForm px-2">
        <form onSubmit={onSubmit}>
          {children}
        </form>
      </div>
    </div>
  )
}

export default Form