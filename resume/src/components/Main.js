import { Stack, Text } from '@chakra-ui/react';
import React from 'react'
import Typing from 'react-typing-animation';
import { motion } from 'framer-motion';

const Main = () => {    
    return (
        <Stack textAlign='left' pt={60} pl={10}>
            <Typing loop="true">
                <Text fontFamily='Roboto Mono' fontSize={50}>
                    HELLO 💻
                </Text>
                <Text fontFamily='Roboto Mono' fontSize={50}>
                    I AM
                </Text>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Text className='navbar-logo' _hover={{bgGradient: "linear(to-r, yellow.500, green.500)",}} bgClip="text" bgGradient="linear(to-l, #7928CA,#FF0080)" fontSize={50}>
                        JULIE
                    </Text>
                    <Typing.Backspace count={5} delay={500} />
                    <Text className='navbar-logo' _hover={{bgGradient: "linear(to-r, yellow.500, green.500)",}} bgClip="text" bgGradient="linear(to-l, #7928CA,#FF0080)" fontSize={50}>
                        SOFTWARE ENGINEER. 
                    </Text>
                </motion.button>
                <Typing.Reset delay={500}/>
            </Typing>
        </Stack>
    );
}

export default Main;