import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';


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
          <Tab label="All" {...a11yProps(0)} sx={{ml:12}} />
          <Tab label="Verified" {...a11yProps(1)} sx={{ml:12}}/>
          <Tab label="Mentions" {...a11yProps(2)} sx={{ml:12}}/>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Notifications...
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Box>
        <Typography variant='h3'>Nothing to see here-yet</Typography>
        <Typography variant='p'>Likes,mentions,reports,and a whole lot more-when it comes from a verifed account,you'll find it here.<Link href="https://help.twitter.com/en/managing-your-account/about-x-verified-accounts" sx={{color:'black',textDecoration:'none',fontWeight:'bold'}}>Learn more</Link></Typography>
        </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2} >
        <Box>
        <Typography variant='h3'>Nothing to see here-yet</Typography>
        <Typography variant='p'>When someone mentions you,you'll find it here.</Typography>
        </Box>
        
      </CustomTabPanel>
    </Box>
  );
}