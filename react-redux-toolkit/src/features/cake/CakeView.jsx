import React from 'react'
import { useSelector } from 'react-redux'

export const CakeView = () => {
    const numOfCakes = useSelector((state) => state.cake.numOfCakes)
  return (
      <div>
          <h2>Number of Cakes - { numOfCakes }</h2>
          <button type="button">Order cake</button>
          <button type="button">Restock cakes</button>
    </div>
  )
}
