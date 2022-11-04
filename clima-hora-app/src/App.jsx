import React,{useState, useEffect} from 'react'
import './App.css'
import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'
import IconComponent from './IconComponent'
import { Flex } from '@chakra-ui/react'
import axios from 'axios'
import 'remixicon/fonts/remixicon.css'


function App() {

  const API_KEY= 'e76c4ab2c944fea7ea9d21b4b0cc665b'
  const [inputValue, setInputValue]= useState('')
  const [dataCity,setDataCity]=useState(null)
  const [icon, setIcon]= useState('')
  const [sunset,setSunset]= useState()
  const [dt,setDt]=useState('')
  const [timeZone,setTimeZone]= useState('')
  const [bool,setBool]= useState(true)

useEffect(()=>{
  const wheaterData= async ()=>{
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${API_KEY}&units=metric`)
    const data = await res.data
    setDataCity(data)
    setIcon(data.weather[0].icon)
    console.log(data);
    setSunset(data.sys.sunset)
    setDt(data.dt)
    setTimeZone(data.timezone)
  }  

  wheaterData()
},[inputValue])

  const handleInputValue = (e) =>{
    e.preventDefault()
    setInputValue(e.target.value)
  }
  
  return (
    <div className="App">

      <Flex 
        justify='center'
        align='center' 
        h='100vh' 
        bgColor='#3b3b3b' 
        flexDirection='column' 
        gap='3rem'>
      
      <form onClick={handleInputValue}>
        <input type='text' name='cities' onChange={(e)=>{handleInputValue(e)}}></input>
        <button className='boton' type='submit' onClick={(e)=>{setBool(false)}}>Search</button>
      </form>

        <Flex 
          w='50vw' 
          h='70vh' 
          flexDirection='column' 
          justifyContent='space-between'
          borderRadius='xl' 
          bgColor='#c8c5b3'
        >
        
          <IconComponent icon={icon} bool={bool} />

          <FirstComponent dataCity={dataCity} bool={bool} dt={dt} timeZone={timeZone} />

          <SecondComponent dataCity={dataCity} bool={bool} sunset={sunset} />

        </Flex>
      </Flex>
    </div>
  )
}

export default App
