import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MoreHappend from '../components/MoreHappend'


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="For You" {...a11yProps(0)} sx={{ml:3}} />
          <Tab label="Trending" {...a11yProps(1)} sx={{ml:3}} />
          <Tab label="News" {...a11yProps(2)} sx={{ml:3}}/>
          <Tab label="Sports" {...a11yProps(3)} sx={{ml:3}}/>
          <Tab label="Entertainment" {...a11yProps(4)} sx={{ml:3}}/>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Box
        sx={{
          // border: '1px solid gray',
          // borderRadius: 4,
          // width: 290,
        }}
      >
        <Typography variant="h5" sx={{fontWeight: 'bold'}}>India trends</Typography>
        <Box sx={{display:'flex',justifyContent:'space-between'}}>
          
          <Box>
            <Typography variant="p" >
             1. Trending 
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
             #NationalUnityDay
            </Typography>
            <Typography variant="p" >
             27.9K Posts
            </Typography>
          </Box>
          <Box>
            <MoreHappend />
          </Box>
        </Box>
        <Box sx={{display:'flex',mt:3,justifyContent:'space-between'}}>
          
          <Box>
            <Typography variant="p" >
             2. Trending 
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
             #SardarVallabhbhaiPatel
            </Typography>
            <Typography variant="p" >
             33.8K Posts
            </Typography>
          </Box>
          <Box>
            <MoreHappend />
          </Box>
        </Box>
        <Box sx={{display:'flex',mt:3,justifyContent:'space-between'}}>
          
          <Box>
            <Typography variant="p" >
             3. Trending 
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
             #iphones
            </Typography>
            <Typography variant="p" >
             4,794K Posts
            </Typography>
          </Box>
          <Box>
            <MoreHappend />
          </Box>
        </Box>
        <Box sx={{display:'flex',mt:3,justifyContent:'space-between'}}>
          
          <Box>
            <Typography variant="p" >
             4. Trending 
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
             #View of Reality
            </Typography>
            <Typography variant="p" >
             41.4K Posts
            </Typography>
          </Box>
          <Box>
            <MoreHappend />
          </Box>
        </Box>
        <Box sx={{display:'flex',mt:3,justifyContent:'space-between'}}>
          
          <Box>
            <Typography variant="p" >
             5. Trending 
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
             #Iron Man Of India 
            </Typography>
            <Typography variant="p" >
             8,880 Posts
            </Typography>
          </Box>
          <Box>
            <MoreHappend />
          </Box>
        </Box>
        <Box sx={{display:'flex',mt:3,justifyContent:'space-between'}}>
          
          <Box>
            <Typography variant="p" >
             6. Trending 
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
             #Apple
            </Typography>
            <Typography variant="p" >
             284K Posts
            </Typography>
          </Box>
          <Box>
            <MoreHappend />
          </Box>
        </Box>
        <Box sx={{display:'flex',mt:3,justifyContent:'space-between'}}>
          
          <Box>
            <Typography variant="p" >
             7. Trending 
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
             #PAKvsBAN
            </Typography>
            <Typography variant="p" >
             21.5K Posts
            </Typography>
          </Box>
          <Box>
            <MoreHappend />
          </Box>
        </Box>
        <Box sx={{display:'flex',mt:3,justifyContent:'space-between'}}>
          
          <Box>
            <Typography variant="p" >
             8. Trending
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
             #Opposition
            </Typography>
            <Typography variant="p" >
             76.1K Posts
            </Typography>
          </Box>
          <Box>
            <MoreHappend />
          </Box>
        </Box>
       
      </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}