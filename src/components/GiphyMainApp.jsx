import React from 'react'
import { useState } from 'react';
import { AddGiphyCategory } from './AddGiphyCategory';
import  GiphyGrid  from './GiphyGrid';

export default function GiphyMainApp() {
    const [categories, setCategories] = useState([]);
    
    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }
    return (

    <main className='container p-5'> 

        <section className='mb-5 text-center'>
            <h1>
            GiphyMainApp
            </h1>
        </section>
        
        {/*section AddGiphyCategory  */}
        <section>
      
            <AddGiphyCategory onNewCategory = {(onNewCategory) =>  onAddCategory(onNewCategory)} />

        </section>

            {/* section GiphyGrid */}
        <section>
            {
                categories.map(category => {
                    return(
                        <GiphyGrid key = {category} category ={category} />
                        // <div key = {category}>
                        //     <h4>{category}</h4>
                        //     <hr />
                        // </div>
                    );
                })
            }
        </section>



    </main>
  )
}
