import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { fetchFromAPI } from '../../utils/fetchFromAPI'

import { Videos, ChannelCard } from '../../components'

const ChannelDetail = () => {
  const { id } = useParams();
  const [ channelDetail, setChannelDetail ] = useState(null);
  const [ videos, setVideos ] = useState([]);

  useEffect(() => {
    fetchFromAPI(`channels?part="snippet&id=${id}`).then((response) => setChannelDetail(response?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`).then((response) => setVideos(response.items));
    
  }, [id])

  return (
    <Box minHeight="95vh">
      <Box>
        <div 
          style={{
            height:'300px',
            background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop={'-110px'} />
      </Box>
      <Box display='flex' p='2rem'>
          <Box sx={{ mr: { sm: '100px', md: '70px' }}} />
            <Videos  videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail