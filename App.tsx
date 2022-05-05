import React from 'react'
import Name from './src/components/Name'
import Test from './src/Test'

const App = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <Test name='Ted' />
      <Name name='Jhon' />
    </div>
  )
}

export default App
