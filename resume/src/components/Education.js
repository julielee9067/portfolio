import { VStack, Stack, Text } from '@chakra-ui/react';
import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

const Education = () => {
    const items = ['SOFTWARE', 'MECHANICAL', 'ELECTRICAL', 'ETC'];
    
    function Item(key) {
        const [isOpen, setIsOpen] = useState(false);
        const toggleOpen = () => setIsOpen(!isOpen);
        return (
            <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
            <motion.div className="avatar" layout />
            <AnimatePresence>{isOpen && <Content key={key} />}</AnimatePresence>
            </motion.li>
        );
    }
    
    function Content() {
        return (
            <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className="row">
                    <Text>
                        
                    </Text>
                </div>
                <div className="row" />
                <div className="row" />
            </motion.div>
        );
    }

    return (
        <Stack mt={50} ml={10}>
            <VStack>
                <Text fontFamily="Roboto Mono" fontSize={30}>
                    UNIVERSITY OF WATERLOO 🦆
                </Text>
                <Text fontFamily="Roboto Condensed" fontSize={18}>
                    Candidate for Bachelor of Applied Science
                </Text>
                <Text fontFamily="Roboto Condensed" fontSize={18}>
                    Honours Mechanical and Mechatronics Engineering
                </Text>
                <Text fontFamily="Roboto Condensed" fontSize={18}>
                    Class of 2022
                </Text>
            </VStack>
            <VStack>
                <Text fontFamily="Roboto Mono" fontSize={30} mt={20}>
                    RELAVENT COURSES
                </Text>
                <AnimateSharedLayout>
                <motion.ul layout initial={{ borderRadius: 25 }}>
                    {items.map(item => (
                        <Item key={item} />
                    ))}
                </motion.ul>
                </AnimateSharedLayout>
            </VStack>
        </Stack>
        
    );
}

export default Education;