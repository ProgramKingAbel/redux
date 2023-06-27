import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'


export const IcecreamView = () => {

    const [value, setValue] = React.useState(1);

    const numOfIceCreams = useSelector((state) => state.icecream.numOfIceCreams)
    const dispatch = useDispatch();
  return (
    <div>
          <h2>Number of Ice creams - { numOfIceCreams }</h2>
          <button onClick={() => dispatch(ordered())} type="button">Order icecreams</button>
          <input
              type='number'
              value={value}
              onChange={(e) => setValue(parseInt(e.target.value))}
          />
          <button onClick={()=> dispatch(restocked(value))} type="button">Restock ice creams</button>
    </div>
  )
}
