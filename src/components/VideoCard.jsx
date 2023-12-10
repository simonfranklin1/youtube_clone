import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle, demoChannelUrl } from '../utils/constants'

const VideoCard = ({ video }) => {
  const { id, snippet } = video

  return (
    <Card sx={{ width: { md: '320px', xs: '100%', sm: '100%' },
      boxShadow: 'none', borderRadius: 0, display: { sm: 'flex', md: 'block', sm: 'flex'}}}>
        <Link to={id.videoId ? `/video/${id.videoId}` : demoVideoUrl}>
            <CardMedia 
                image={snippet?.thumbnails?.high?.url}
                title={snippet?.title} 
                sx={{ width: { xs: '100%', sm: '358px'}, height: { xs: 180, sm: '100%', md: 180}}}/>
        </Link>
        <CardContent sx={{ backgroundColor: "#1e1e1e", height: '160px', flex: '1'}}>
          <Link to={id.videoId ? `/video/${id.videoId}` : demoVideoUrl}>
            <Typography variant='subtitle1' fontWeight={'bold'} color="#fff">
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>
          <Link to={snippet?.channelId ? `channel/${snippet?.channelId}` : demoChannelUrl}>
            <Typography variant='subtitle2' fontWeight={'bold'} color="gray">
              {snippet?.channelTitle.slice(0, 60) || demoChannelTitle}
              <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px'}} />
            </Typography>
          </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard