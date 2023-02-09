import React from 'react'

interface Props{
title: string,
description: string
}

const Head = (props: Props) => {
  React.useEffect(()=>{
    document.title = props.title + ' | Portfólio';
    document.querySelector("meta[name='description']")
    ?.setAttribute('content', props.description || '')
  },[props])
  return (
    <></>
  )
}

export default Head