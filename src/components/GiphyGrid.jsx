import React, { useEffect } from 'react'
import  { useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import GiphyItem from './GiphyItem';


 const GiphyGrid =   ({category}) => {
    const [gifs, setGifs] = useState([]);

    
    // const getGifs =  fetch(url);
    
    useEffect(  () => {
      getGifs(category)
      .then(images => setGifs(images))
        
    }, [])
   
  

  return (
    <>
    <h3>{category}</h3>
    <hr />
    <section className=''> 
      {
        gifs.map(gif => {
          return(
            <GiphyItem key={gif.id} gif = {gif}/>
          )
        })
      }
    </section>
    
    </>
  )
}

export default GiphyGrid;