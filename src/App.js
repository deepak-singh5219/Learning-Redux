import React from 'react'
import CakeContainer from './components/CakeContainer'
import { Provider } from 'react-redux'
import store from './Redux/store'
import { Toaster } from 'react-hot-toast';



const App = () => {
  return (
    <Provider store={store}>
    <div className='App'>
      <Toaster/>
      <CakeContainer/>
    </div>
    </Provider>
  )
}

export default App

