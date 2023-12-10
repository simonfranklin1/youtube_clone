import { useState, useEffect } from "react"
import { Box, Stack, Typography } from "@mui/material"
import { Videos, Sidebar } from '../../components'
import  { fetchFromAPI } from '../../utils/fetchFromAPI'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('Novidade');
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((response) => setVideos(response.items))
  }, [selectedCategory])


  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" }}}>
      <Box sx={{ height: { sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: {sx: 0, md: 2} }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        <Typography className="copygright" variant="body2" sx={{ mt: 1.5, color: "#fff", ml: 1}}>
          Copyright 2023 SF Media
        </Typography>
  
      </Box>

      <Box p='1.5rem' sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography variant="h4" fontWeight='bold' mb={2} sx={{ color: 'white'}}>
          {selectedCategory}
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed