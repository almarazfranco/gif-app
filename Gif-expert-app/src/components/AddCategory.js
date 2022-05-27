import React, { useState } from 'react'
import PropTypes from 'prop-types'


const AddCategory = ({setCat}) => {

  const [name, setAddName] = useState('');

  const addNameChange = (e) => {
    setAddName(e.target.value);
    console.log(e.target.value);
    setCat(e.target.value);
    
  }

  const notSubmit = (e) => {
    e.preventDefault(e);

    if (name !== '' && name !== undefined) {
      setCat(name);
    }
    
    setAddName('');
  }

  return (

    <form onSubmit={notSubmit}>

      <input
        type="text"
        value={name}
        placeholder="Buscar"
        onChange={addNameChange}
      />

    </form>

  )
}

AddCategory.propTypes = {
  setCat: PropTypes.func.isRequired
}

export default AddCategory ;