import React, { ChangeEventHandler } from 'react'

interface FormInputProps {
    inputType?: boolean;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: ChangeEventHandler;
    maxLength?: number;
    required?: boolean;
  }

const FormInput:React.FC<FormInputProps> = ({inputType = true, type, placeholder, value, onChange, maxLength, required = false}) => {
  return (
    <div className='mb-3'>
    {inputType ? 
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      required={required}
      className='form-control'
    /> :
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className='form-control'
     />}
    </div>
  )
}

export default FormInput