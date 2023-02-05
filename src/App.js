import React from 'react'
import CakeContainer from './components/CakeContainer'
import { Provider } from 'react-redux'
import store from './Redux/store'



const App = () => {
  return (
    <Provider store={store}>
    <div className='App'>
      <CakeContainer/>
    </div>
    </Provider>
  )
}

export default App
