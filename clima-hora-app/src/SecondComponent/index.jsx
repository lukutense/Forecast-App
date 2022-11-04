import React from "react";
import {Flex, Box, Image, Text} from '@chakra-ui/react'
import 'remixicon/fonts/remixicon.css'

const SecondComponent = ({dataCity,bool,sunset})=> {
    
    let formattedTime= '-'

    if(sunset){
        let date = new Date(sunset * 1000);
        formattedTime = `${date.getHours()}:${date.getMinutes()}`;
    }
    
    return (
        <Flex h='90px' justify='space-between' align='center' borderRadius='xl'>
            <Flex align='center' gap='10px' ml='10px'>  
                <i className="ri-haze-line"></i> 
                <Box>   
                    <Text>{formattedTime} PM</Text>
                    <Text>Sunset</Text>
                </Box>
            </Flex>  
            <Flex align='center' gap='10px'>
                <i className="ri-drop-line"></i> 
                <Box>
                {
                  bool ? <Text>-</Text> : <Text>{dataCity.main.humidity}</Text>
                }
                    
                    <Text>Humidity</Text>
                </Box>
            </Flex>  
            <Flex align='center' gap='10px'>
                <i className="ri-drizzle-line"></i>
                <Box>
                {
                  bool ? <Text>-</Text> : <Text>{dataCity.main.pressure}</Text>
                }
                    
                <Text>Pressure</Text>
                </Box>
            </Flex>
            <Flex align='center' gap='10px' mr='10px'>
                <i className="ri-windy-line"></i>
                <Box>
                {
                  bool ? <Text>-</Text> : <Text>{dataCity.wind.speed}</Text>
                }
                    
                    <Text>Speed</Text>
                </Box>
            </Flex>
          </Flex>
    )
    
}

export default SecondComponent