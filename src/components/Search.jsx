import React, { useRef, useState } from 'react'


function Search({setNewUrl}) {
  const searchText = useRef()
  
 

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = (searchText.current.value)
    setNewUrl(query)
  }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" ref={searchText} />
        <button>Search</button>
    </form>
  )
}

export default Search