import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MoreHappend from "../components/MoreHappend";
import { useForm } from "../context/UserContext";
import UserContext from "../context/UserContext";

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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const { news, trending,sports,entertainment } = useForm(UserContext);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="For You" {...a11yProps(0)} sx={{ ml: 3,fontWeight:'bold' }} />
          <Tab label="Trending" {...a11yProps(1)} sx={{ ml: 3,fontWeight:'bold' }} />
          <Tab label="News" {...a11yProps(2)} sx={{ ml: 3,fontWeight:'bold' }} />
          <Tab label="Sports" {...a11yProps(3)} sx={{ ml: 3,fontWeight:'bold' }} />
          <Tab label="Entertainment" {...a11yProps(4)} sx={{ ml: 3,fontWeight:'bold' }} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          India trends
        </Typography>
        {trending.map((trending) => (
          <>
            <Box
              sx={{ display: "flex", mt: 3, justifyContent: "space-between" }}
            >
              <Box>
                <Typography variant="p">{trending.trend}</Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {trending.tags}
                </Typography>
                <Typography variant="p">{trending.likes}</Typography>
              </Box>
              <Box>
                <MoreHappend />
              </Box>
            </Box>
          </>
        ))}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {news.map((news) => (
          <>
            <Box
              sx={{ display: "flex", mt: 2, justifyContent: "space-between" }}
            >
              <Box>
                <Typography variant="p">{news.trend}</Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {news.tags}
                </Typography>
                <Typography variant="p">{news.likes}</Typography>
              </Box>
              <Box>
                <MoreHappend />
              </Box>
            </Box>
          </>
        ))}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      {sports.map((news) => (
          <>
            <Box
              sx={{ display: "flex", mt:2, justifyContent: "space-between" }}
            >
              <Box>
                <Typography variant="p">{news.trend}</Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {news.tags}
                </Typography>
                <Typography variant="p">{news.likes}</Typography>
              </Box>
              <Box>
                <MoreHappend />
              </Box>
            </Box>
          </>
        ))}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
      {entertainment.map((news) => (
          <>
            <Box
              sx={{ display: "flex", mt:2, justifyContent: "space-between" }}
            >
              <Box>
                <Typography variant="p">{news.trend}</Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {news.tags}
                </Typography>
                <Typography variant="p">{news.likes}</Typography>
              </Box>
              <Box>
                <MoreHappend />
              </Box>
            </Box>
          </>
        ))}
      </CustomTabPanel>
    </Box>
  );
}
