import React from 'react';
import '../index.css';

export const GifGridItem = ({url, title, id}) => {

  return (
    <div className='gif-item' key={id}>
      <img src={url} alt={title} />
      <p> {title} </p>
    </div>
  )
  
};