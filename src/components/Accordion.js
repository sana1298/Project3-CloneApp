import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import { Box } from '@mui/material';

export default function BasicAccordion() {
  return (
    <Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Creator Studio</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box sx={{display:'flex'}}>
            <BarChartOutlinedIcon/>
            <Typography>Analytics</Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Professional Tools</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{display:'flex'}}>
            <BarChartOutlinedIcon/>
            <Typography>Ads</Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Settings and Support</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <BarChartOutlinedIcon/>
            <Typography>Analytics</Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
      
    </Box>
  );
}