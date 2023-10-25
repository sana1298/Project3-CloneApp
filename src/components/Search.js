import { Box } from '@mui/material'
import React from 'react'
import SearchTabs from '../Tabs/SearchTabs'
import SearchBar from './SearchBar'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Search = () => {
  return (
    <>
    <Box sx={{width:660,ml:20}}>
      <Box sx={{
        display:'flex',
        justifyContent:'space-between',
        p:1}}>
          <Box 
          sx={{width:670}}
          >
          <SearchBar />
          </Box>
        
      
      <SettingsOutlinedIcon 
      sx={{mt:1}}
      />
      </Box>
    
    <SearchTabs/>
   </Box>
    </>
  )
}

export default Search