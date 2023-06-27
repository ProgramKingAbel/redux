import { useState } from 'react'
import './App.css'
import { IcecreamView } from './features/icecream/IcecreamView'
import { CakeView } from './features/cake/CakeView'
import { UserView } from './features/user/UserView'

function App() {
  return (
    <div className='App'>

      <CakeView />
      <IcecreamView />
      <UserView />
    </div>
  )
}

export default App
