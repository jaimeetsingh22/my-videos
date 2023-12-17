import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, HStack, Stack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { BiMenuAltLeft } from 'react-icons/bi'
import { Link } from 'react-router-dom';
const Header = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button
                position={'fixed'}
                top={'4'}
                left={'4'}
                background={'lightgreen'}
                borderRadius={'full'}
                p={'0'}
                w={'10'}
                onClick={onOpen}
                zIndex={'overlay'}
            >
                <BiMenuAltLeft size={'20'} />
            </Button>
            <Drawer isOpen={isOpen} placement='left' onClose={onClose} position>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader textTransform={'uppercase'} onClick={onClose}>My videos</DrawerHeader>
                    <DrawerBody>
                        <Stack direction={'column'} alignItems={'flex-start'}>
                            <Button onClick={onClose} variant='ghost' color={'green'} >
                                <Link to={'/'}>Home</Link>
                            </Button>
                            <Button onClick={onClose} variant={'ghost'} color={'green'} >
                                <Link to={'/videos'}>Videos</Link>
                            </Button>
                            {/* <Button onClick={onClose} variant={'ghost'} color={'green'} >
                                <Link to={'/video?category=comedy'}>Comedy Video</Link>
                            </Button> */}
                            <Button onClick={onClose} variant={'ghost'} color={'green'} >
                                <Link to={'/upload'}>Upload videos</Link>
                            </Button>
                        </Stack>

                        <HStack
                            pos={'absolute'}
                            bottom={'10'}
                            // justifyContent={'space-around'}
                            left={'0'}
                            width={'full'}
                            justifyContent={'space-evenly'}
                        >
                            <Button onClick={onClose} variant='outline' background={'lightgreen'}><Link to={'/login'}>Log In</Link></Button>
                            <Button onClick={onClose} variant='outline' colorScheme={'green'}><Link to={'/signup'}>Sign Up</Link></Button>
                        </HStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Header