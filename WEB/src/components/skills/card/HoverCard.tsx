import React from 'react'

interface CardProps {
name: string,
srcImg: string
}

const HoverCard = ({name, srcImg}:CardProps) => {
  return (
    <div key={name} className="tec-icon">
    <img src={srcImg} alt="icone da biblioteca" />
  </div>
  )
}

export default HoverCard