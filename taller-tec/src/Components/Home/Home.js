import React from 'react'
import '../../Styles/home.css'
import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search'
import DevicesContainer from '../Devices/DevicesContainer'
import FAB from '../FAB/FAB'

const Home = () => {
  return (
    <div className='Home'>
        <Navbar></Navbar>
        <Search></Search>
        <DevicesContainer></DevicesContainer>
        <FAB></FAB>
    </div>
  )
}

export default Home