import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import { useForm } from "../context/UserContext";
// import UserContext from "../context/UserContext";
import PostDisplay from '../components/PostDisplay';
import LikeDisplay from '../components/LikeDisplay';
import MediaDisplay from '../components/MediaDisplay';
import HighlightsDisplay from '../components/HighlightsDisplay';
import FollowDisplay from '../components/FollowDisplay';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  // const { defalutPost } =useForm(UserContext);


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
          <Tab label="Posts" {...a11yProps(0)} sx={{ml:4}}/>
          <Tab label="Replies" {...a11yProps(1)} sx={{ml:4}} />
          <Tab label="Highlights" {...a11yProps(2)} sx={{ml:4}} />
          <Tab label="Media" {...a11yProps(3)} sx={{ml:4}}/>
          <Tab label="Likes" {...a11yProps(4)} sx={{ml:4}} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
       <PostDisplay/>
       <hr />
       <FollowDisplay/>
       
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <HighlightsDisplay/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      <MediaDisplay />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
       <LikeDisplay/>
      </CustomTabPanel>
    </Box>
  );
}