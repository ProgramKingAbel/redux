import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'

export const IcecreamView = () => {
    const numOfIceCreams = useSelector((state) => state.icecream.numOfIceCreams)
    const dispatch = useDispatch();
  return (
    <div>
          <h2>Number of Ice creams - { numOfIceCreams }</h2>
          <button onClick={()=> dispatch(ordered())} type="button">Order icecreams</button>
          <button onClick={()=> dispatch(restocked(5))} type="button">Restock ice creams</button>
    </div>
  )
}
