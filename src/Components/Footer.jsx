import { Box, Button, ButtonGroup, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend, AiFillYoutube, AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
    return (
        <Box bg={'blackAlpha.900'} minH={'40'} p={'16'} color={'#fff'}>
            <Stack direction={['column', 'row']}>
                <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                    <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']}>
                        subcribe to get updates

                    </Heading>
                    <HStack borderBottom={'2px solid #fff'} py={'2'}>
                        <Input placeholder='Enter Email Here' border={'none'} outline={'none'} borderRadius={'none'}
                            focusBorderColor='none' />
                        <Button
                            p={'0'}
                            colorScheme='purple'
                            variant={'ghost'}
                            borderRadius={'0 20px 20px 0'}
                        >
                            < AiOutlineSend size={20} />
                        </Button>
                    </HStack>
                </VStack>
                <VStack w={'full'}
                    borderLeft={['none', '1px solid white']}
                    borderRight={['none', '1px solid white']}
                >
                    <Heading textAlign={'center'} textTransform={'uppercase'}>
                        My Video 
                    </Heading>
                    <Text>
                        All Right Reserved
                    </Text>
                </VStack>
                <VStack w={'full'}>
                    <Heading size={'md'} textTransform={'uppercase'} >
                    Social media
                    </Heading>
                    <Button variant={'link'} colorScheme={'whiteAlpha'}>
                    <a href="https://youtube.com/@owncreation3545" target='_blank'>
                        <AiFillYoutube size={'50'} color='red'/>
                    </a>
                    </Button>
                    <Button variant={'link'} colorScheme={'whiteAlpha'}>
                    <a href="https://instagram.com/jaimeet.s/" target='_blank'>
                        <AiFillInstagram size={'50'} color='pink'/>
                    </a>
                    </Button>
                </VStack>
            </Stack>
        </Box>
    )
}

export default Footer