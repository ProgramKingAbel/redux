import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


export const IcecreamView = () => {
    const numOfIceCreams = useSelector((state) => state.icecream.numOfIceCreams)
    const dispatch = useDispatch();
  return (
    <div>
          <h2>Number of Ice creams - { numOfIceCreams }</h2>
          <button type="button">Order icecreams</button>
          <button type="button">Restock ice creams</button>
    </div>
  )
}
