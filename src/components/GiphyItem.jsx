import React from 'react'

const GiphyItem = ({gif}) => {
  return (
    <article className=''> 
        <h6> {gif.title} </h6>
        <img  src={gif.url} alt="" />
    </article>
  )
}

export default GiphyItem