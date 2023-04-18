import React from 'react'
import Nav from './components/navbar/Nav'
import Body from './components/body1/Body'
import Body2 from './components/body2/Body2'
import Footer from './components/footer/Footer'

const App = () => {
  let Firstname = 'Reezy'
  let Lastname= 'wise'
  let input = <input type='text' placeholder='enter your Name'/>
  return (
    <div>
      <Nav/>
      <Body/>
      <Body2/>
      <Footer/>
      {/* {Firstname} {Lastname} <br/> {input} */}
    
      
    </div>
  )
}

export default App
