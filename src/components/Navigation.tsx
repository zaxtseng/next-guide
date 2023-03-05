
import { Box, HStack } from '@chakra-ui/react'
import Link from 'next/link'

const Navigation = () => {
  return (
    <Box h='52px' bg='#202020' color='#fff'>
        <HStack  h='52px' spacing={3} justifyContent='center' alignItems='center'>
        <Link href="#">影片</Link>
        <Link href="#">漫画</Link>
        <Link href="#">电影</Link>
        <Link href="#">电视</Link>
        <Link href="#">新闻</Link>
        </HStack>
    </Box>
  )
}

export default Navigation