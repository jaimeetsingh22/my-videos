import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const LogIn = () => {
    return (
        <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
            <VStack
                alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}
            >
                <Heading>Welcome Back</Heading>
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

                <Button variant={'link'}
                    alignSelf={'flex-end'}>
                    <Link to={'/forgetpassword'}>Forget Password</Link>
                </Button>
                <Button colorScheme='green' type='submit'>
                    Log In
                </Button>
                <Text textAlign={'right'} >New User?
                
                <Button variant={'link'}
                marginLeft={'2'}
                    colorScheme='green'>
                    <Link to={'/signup'}> Sign Up</Link>
                </Button>
                </Text>
            </VStack>
        </Container>
    )
}

export default LogIn