import React from "react"
import {Flex, Box, Text} from '@chakra-ui/react'


const FirstComponent = ({dataCity,bool, dt, timeZone})=>{

  const localDateHour =new Date(dt*1000-(timeZone*1000))
  const fullDate= `${localDateHour.getDate()}/${(localDateHour.getMonth() + 1)}/${localDateHour.getFullYear()}`

  const fullHour= `${localDateHour.getHours()}:${localDateHour.getMinutes()}:${localDateHour.getSeconds()}`

    return(

        <Flex h='140px' bgColor='#5e6472' color='white'>
            <Flex flex='1' justify='center' align='center'>
              {
                bool ? <Text>-°C</Text> : <Text>{dataCity.main.temp}°C</Text>
              }
            </Flex>

            <Flex flex='1' flexDirection='column' justify='center' align='center'>
              {
                bool ? <Text>-</Text> : <Text>{dataCity.weather[0].main}</Text>
              }
              {
                bool ? <Text>-</Text> : <Text>{dataCity.name}</Text>
              }      
            </Flex>

            <Flex flex='1' bgColor='#d4a373' flexDirection='column' justify='center' align='center'>
              <Text>{fullDate}</Text>
              <Text>{fullHour}</Text>
            </Flex>

          </Flex>
    )
}

export default FirstComponent