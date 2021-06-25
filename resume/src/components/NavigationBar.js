import { HStack, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavigationBar = () => {
    return (
        <Stack direction={'column'}>
            <HStack justify='space-between' pt='20px' pl='10px'>
                <HStack>
                    <Link to='/'>
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Text className='navbar-logo' _hover={{bgGradient: "linear(to-r, yellow.500, green.500)",}} bgClip="text" bgGradient="linear(to-l, #7928CA,#FF0080)" fontSize={24}>
                                JULIE
                            </Text>
                        </motion.button>
                    </Link>
                    <Link to='/Stacks'>
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Text fontFamily='Roboto Mono' ml={3} fontSize={20}>
                                STACKS
                            </Text>
                        </motion.button>
                    </Link>
                    <Link to='/Experiences'>
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Text fontFamily='Roboto Mono' ml={3} fontSize={20}>
                                EXPERIENCES
                            </Text>
                        </motion.button>
                    </Link>
                    <Link to='/Projects'>
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Text fontFamily='Roboto Mono' ml={3} fontSize={20}>
                                PROJECTS
                            </Text>
                        </motion.button>
                    </Link>
                    <Link to='/Education'>
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Text fontFamily='Roboto Mono' ml={3} fontSize={20}>
                                EDUCATION
                            </Text>
                        </motion.button>
                    </Link>
                </HStack>
            </HStack>
        </Stack>        
    )
}

export default NavigationBar;