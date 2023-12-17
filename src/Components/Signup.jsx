import { Avatar } from '@chakra-ui/react'
import React from 'react'
import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
    <VStack
        alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}
    >
        <Heading textAlign={'center'}>My Video</Heading>
        <Avatar alignSelf={'center'} boxSize={'32'}/>
        <Input
            placeholder='Name'
            type='text'
            required
            focusBorderColor='green.500'
        ></Input>
        <Input
            placeholder='Email'
            type='email'
            required
            focusBorderColor='green.500'
        ></Input>
        <Input
            placeholder='Password'
            type='password'
            required
            focusBorderColor='green.500'
        ></Input>

        <Button colorScheme='green' type='submit'>
            Sign Up
        </Button>
        <Text textAlign={'right'} >Already Signed Up?
        
        <Button variant={'link'}
        marginLeft={'2'}
            colorScheme='green'>
            <Link to={'/login'}> Log In</Link>
        </Button>
        </Text>
    </VStack>
</Container>
  )
}

export default Signup