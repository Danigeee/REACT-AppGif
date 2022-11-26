import React, { useState } from 'react'

export const AddGiphyCategory = ({onNewCategory}) => {
    const[inputValue, setInputValue] = useState("")

    const onFormSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim().length < 2){
            return;
        }
        onNewCategory(inputValue.trim());
        setInputValue("");
    }

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }
  return (
    <section> 

        
        <form onSubmit={onFormSubmit} >
                <input
                    type="text"
                    placeholder='Ingrese la categoria a buscar'
                    className='form-control'
                    value = {inputValue}
                    onChange = {onInputChange}
                    />
        </form>
        <button className='btn btn-warning mt-5'>reset</button>
    </section>
  )
}
