import React from 'react';
import { GifGridItem } from './GifGridItem';
// import getGifs from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import '../index.css';

const GifGrid = ( {category} ) => {

  const {data: imgs, loading} = useFetchGifs(category);

  return (
    <>
      <p className='title'>{category}</p>

      <div className='gif-grid'>

        {
          loading &&
            <div className='spinner-container'>
              <div className='spinner'></div>
            </div>
        }

        {
          imgs.map(img => (
            <GifGridItem
              key={img.id}
              {...img }
            />
          ))
        }
      </div>
    </>
  )
};

export default GifGrid;