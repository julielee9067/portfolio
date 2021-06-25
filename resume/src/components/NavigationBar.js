import { HStack, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <Stack direction={'column'}>
            <HStack justify='space-between' pt='20px' pl='20px'>
                <HStack>
                    <Link to='/'>
                        <Text className='navbar-logo' fontWeight="bold" _hover={{bgGradient: "linear(to-r, yellow.500, green.500)",}} bgClip="text" bgGradient="linear(to-l, #7928CA,#FF0080)" fontSize={24}>
                            JULIE
                        </Text>
                    </Link>
                    <Link to='/Stacks'>
                        <Text fontFamily='Roboto Condensed' ml={3} fontSize={20}>
                            STACKS
                        </Text>
                    </Link>
                    <Link to='/Expriences'>
                        <Text fontFamily='Roboto Condensed' ml={3} fontSize={20}>
                            EXPERIENCES
                        </Text>
                    </Link>
                    <Link to='/Education'>
                        <Text fontFamily='Roboto Condensed' ml={3} fontSize={20}>
                            EDUCATION
                        </Text>
                    </Link>
                    <Link to='/Projects'>
                        <Text fontFamily='Roboto Condensed' ml={3} fontSize={20}>
                            PROJECTS
                        </Text>
                    </Link>
                </HStack>
            </HStack>
        </Stack>        
    )
}

export default NavigationBar;