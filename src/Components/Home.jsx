import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/3.png'

const Home = () => {
    return (
    
            <Box>
                <MyCarousel />
                <Container 
                maxW={'container.xl'}
                >
                    <Heading textTransform={'uppercase'} borderBottom={'2px solid black'} py={'2'} margin={'auto'} w={'fit-content'}>
                        The Green heart
                    </Heading>
                    <Stack alignItems={'center'}
                    h={'full'}
                    direction={['column','row']} // ye responsiveness ke liye hai 
                    >
                       <Image src={img1} w={'full'} h={['auto','400']} filter={'hue-rotate(100deg)'}></Image>
                    <Text
                    letterSpacing={'widest'}
                    lineHeight={'190%'}
                    p={['4','16']}
                    textAlign={'center'}
                    >
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint repudiandae molestias, asperiores accusamus esse veniam dolorem? Illum, eius fugit? Ducimus, sunt. Nostrum repudiandae illo, commodi sequi consequatur repellat corporis ullam nisi fugit culpa eligendi eaque quam! Beatae quo eius ratione exercitationem commodi, iusto dignissimos ipsa dolore neque a in omnis voluptatem voluptas vitae perspiciatis officia hic nihil eligendi. Rerum pariatur, debitis ut voluptate suscipit modi quas. Cum, aliquam ut dolorum modi veniam molestiae deleniti earum expedita similique veritatis temporibus quae beatae corporis laborum quasi velit delectus voluptatibus tempora ea nemo, qui doloribus, rerum quaerat. Amet ex earum quo expedita hic.
                    </Text>

                    </Stack>
                </Container>
            </Box>
      
    )
}
const headings = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textTransform: 'uppercase',
    padding: '4',
}

const MyCarousel = () => {
    return (
        <Carousel
            autoPlay
            infiniteLoop
            interval={1000}
            showStatus={false}
            showThumbs={false}
            showArrows={false}
        >
            <Box w={"full"} h={'100vh'}>
                <Image src={'https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt='no internet'  h={'full'} w={'full'} objectFit={'cover'}    />
                <Heading bgColor={'blackAlpha.600'} color={'white'}  {...headings}>Nature</Heading>
            </Box>
            <Box w={"full"} h={'100vh'}>
                <Image src={'https://images.pexels.com/photos/2360569/pexels-photo-2360569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt='no internet'  h={'full'} w={'full'} objectFit={'cover'} />
                <Heading bgColor={'blackAlpha.600'} color={'white'} zIndex={'10'}  {...headings}>City</Heading>
            </Box>
            <Box w={"full"} h={'100vh'}>
                <Image src={'https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt='no internet'  h={'full'} w={'full'} objectFit={'cover'}/>
                <Heading bgColor={'blackAlpha.600'} color={'white'} zIndex={'10'}  {...headings}>Mountains</Heading>
            </Box>
            <Box w={"full"} h={'100vh'}>
                <Image src={'https://images.pexels.com/photos/12335821/pexels-photo-12335821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt='no internet' h={'full'} w={'full'} objectFit={'cover'} />
                <Heading bgColor={'blackAlpha.600'} color={'white'} zIndex={'10'}  {...headings} >Monuments</Heading>
            </Box>
        </Carousel>
    )
}

export default Home;