import React from 'react'
import { GlobalContext } from '../context/GlobalState'
import { useContext } from 'react'
import Galerey from '../components/Galerey'

function LikedImages() {
  const { likedImages } = useContext(GlobalContext)
  return (
    <>
      <Galerey/>
    </>
  )
}

export default LikedImages
