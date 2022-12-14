import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';
 

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'PUBG' ]);

    const onAddCategory=(newCategory)=>{
 
    if(categories.includes(newCategory)) return;
 
       setCategories([newCategory,...categories]);

    } 
 
  return (
   <>
 
   <h1>GifExpert</h1>

  
<AddCategory  
onNewCategory={ (value) => onAddCategory(value) }
/>
  
    { categories.map((category) =>  (
         <GifGrid key={category} category={category} />
        ))
      }
 
   </>
  )
}
