import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

  const [category, setCategories] = useState('');

  return (
    <>

      <h2>Gif Browser</h2>

      <AddCategory setCat={setCategories} />
      
      <GifGrid
        key={ category }
        category={ category }
      />

    </>
  );

};


export default GifExpertApp;