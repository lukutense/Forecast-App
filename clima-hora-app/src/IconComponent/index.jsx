import React from 'react'
import { Flex, Box, Icon, Image, Text} from '@chakra-ui/react'


const IconComponent= ({icon,bool})=>{
    

    return(
        <Flex h='170px' align='center' alignItems='center' justify='center'
          borderRadius='xl' >
            {
               bool ? <Text>Ingresá la ciudad</Text> : <Image src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
            }
            
        </Flex>
    )
}

export default IconComponent