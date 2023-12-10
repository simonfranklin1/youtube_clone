import React from 'react'
import { Stack, Box } from '@mui/material'
import { VideoCard, ChannelCard } from './index'
import { Loading } from './index'

const Videos = ({videos, direction}) => {
  if(!videos?.length) return <Loading />


  return (
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' gap={2}>
        {videos.map((item, index) => (
            <Box key={index} sx={{ width: { sm: '100%', xs: '100%', md: 'auto'}}}>
                {item.id.videoId && <VideoCard video={item} />}
                {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
        ))}
    </Stack>
  )
}

export default Videos
