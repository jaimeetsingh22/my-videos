import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';

const ColorModeSwitcher = (props) => {
 const { toggleColorMode } = useColorMode();
 const SwitchIcon = useColorModeValue(FaMoon, FaSun);

 return (
    <IconButton
      onClick={toggleColorMode}
      icon={< SwitchIcon />}
          variant="ghost"
      color="current"
      pos={'fixed'}
      top={'4'}
      right={'4'}
      zIndex={'overlay'}
      // fontSize={{ base: "20px", md: "35px" }}
      // _hover={{ bg: "#f1f8ff"}}
      // _focus={{ outline: "none" }}
      // transition=".5s all ease-in-out"
      // aria-label={`Switch to ${useColorModeValue('dark', 'light')} mode`}
      title={`Switch to ${useColorModeValue('dark', 'light')} mode`}

      {...props} />
 )
}

export default ColorModeSwitcher;