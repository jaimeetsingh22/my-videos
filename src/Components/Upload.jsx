import React from 'react'
import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const Upload = () => {
    return (
        <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
            <VStack color={'green.500'} h={'full'} justifyContent={'center'}>
            <AiOutlineCloudUpload size={'10vmax'}/>
            <form action="#">
                <HStack>
                    <Input required type='file'
                    // hum yaha file selection button ko style karenge
                    css={{
                        '&::file-selector-button':{
                            border:'none',
                            width:'calc(100% + 36px)',
                            height:'100%',
                            marginLeft:'-10px',
                            color:'green',
                            backgroundColor:'white',
                            cursor:'pointer'
                        }
                    }}
                    />
                    <Button colorScheme='green' type='submit'>Upload</Button>
                </HStack>
            </form>
            </VStack>
        </Container>
    )
}

export default Upload