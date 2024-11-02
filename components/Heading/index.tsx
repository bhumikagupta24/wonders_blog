import React from 'react'
import styled from './style.module.css'

interface Heading {
    name: string;
  }
const Heading: React.FC<Heading> = ({name}) => {
  return (
    <div className={`container ${styled.hdgOuter} pt-4 pt-lg-4`}>
      <h2>
          {name}
      </h2>
    </div>
  )
}

export default Heading