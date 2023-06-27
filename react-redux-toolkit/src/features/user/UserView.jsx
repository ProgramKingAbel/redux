import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice.js'

export const UserView = () => {
const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchUsers());
  }, [])

  return (
    <h2>List of Users</h2>
  )
}
