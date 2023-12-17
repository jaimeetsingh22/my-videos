import { Stack, VStack, Heading, Text, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

// i will work on it later

const videoarr = [
  {
    name: 'CARPEDIAM 2K23',
    desc:`BCET CARPEDIEM 2K23 (College Fest)  Dance performance | GF BF | BAWAAL | PYAR HOTA KAI BAR HAI || DANCE PERFORMANCE BY JAIMEET AND GRINDELIA |
    BCET (Bengal college of Engineering and Technology) Durgapur , west bengal`,
    src: "https://www.youtube.com/embed/qql6RrRqkgQ?si=gGsflkZke5Djy5zK"
  },
  {
    name: 'BAWAL DANCE VIDEO',
    desc:`BAWAAL DANCE VIDEO | MJ5 SONG || dance cover by jaimeet|| OWn creation`,
    src: "https://www.youtube.com/embed/kGYX3BdTGOs?si=SqSLGID9NzSCwD0J"
  },
  {
    name: 'BAARISH KI JAYE DANCE',
    desc:`Baarish Ki Jaaye | B Praak Ft dance cover by jaimeet singh`,
    src: "https://www.youtube.com/embed/jgh5n_0zfH8?si=Xj0kGb5tCVn7zKTj"
  },
  {
    name: 'KHAIRIYAT PUCHO',
    desc:`KHAIRIYAT PUCHO|arjit singh| chichhore||OWN CREATion performed by jaimeet singh`,
    src: "https://www.youtube.com/embed/ayVyKOV8ecI?si=-ETn9xMx5cyULRkI"
  }
]

const Videos = () => {
  const [videosrc, setVideosrc] = useState(videoarr[0].src);
  const [videoName, setVideoName] = useState(videoarr[0].name);
  const [desc, setDesc] = useState(videoarr[0].desc);
  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <iframe autoplay width="100%" height="90%" src={videosrc} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowX={'auto'}>
          <Heading>
            {
              videoName
            }
          </Heading>
          <Text>
            {desc}
          </Text>
        </VStack>
      </VStack>
      <VStack w={['full', 'xl']} alignItems={'stretch'} p={'8'} overflowY={'auto'}
        spacing={'8'} // ye flex ki gap property hai 
      >
       {
         videoarr.map((items, index)=>{
          return(

            <Button variant={'ghost'} colorScheme='green' onClick={()=>{
              setVideosrc(items.src)
              setVideoName(items.name)
              setDesc(items.desc)
            }} >{items.name} </Button>
          )
         })
       }
      </VStack>
    </Stack>
  )
}

export default Videos