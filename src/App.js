import React from 'react';
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  MenuItem,
  Select,
  FormControl,
  Chip,
  Stack,
} from '@mui/material';
import { Home, Person, Edit, BugReport, Add } from '@mui/icons-material';

const drawerWidth = 220;

const patients = [
  { phone: '0706958674', name: 'Control Shift', birthdate: '05/11/2020', age: 1, address: 'nairobi', status: 'Single', complaints: 1 },
  { phone: '0706959755', name: 'martin patton', birthdate: '01/14/1970', age: 34, address: 'nairobi', status: 'Single', complaints: 1 },
  { phone: '0708957895', name: 'json bigman', birthdate: '01/19/1970', age: 31, address: 'thika', status: 'Married', complaints: 0 },
  { phone: '0708963044', name: 'king jay', birthdate: '02/19/2003', age: 54, address: 'Machakos', status: 'Married', complaints: 0 },
  { phone: '0708964045', name: 'Barrack Obama', birthdate: '08/31/1988', age: 47, address: 'thika', status: 'Single', complaints: 0 },
  { phone: '0790867455', name: 'Donald Trump', birthdate: '01/03/2002', age: 13, address: 'nairobi', status: 'Single', complaints: 0 },
  { phone: '0798643045', name: 'Nzioka Vic', birthdate: '01/02/1990', age: 30, address: 'nairobi', status: 'Single', complaints: 1 },
  { phone: '0798693005', name: 'Mioka Vic', birthdate: '01/02/1991', age: 29, address: 'cherong', status: 'Single', complaints: 0 },
  { phone: '07986436095', name: 'Clerai', birthdate: '01/02/2000', age: 15, address: 'cherong', status: 'Single', complaints: 0 },
  { phone: '07986436095', name: 'watsoni', birthdate: '01/02/1990', age: 30, address: 'cherong', status: 'Married', complaints: 1 },
];

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#007bff' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" noWrap>Imaster Patient Record Management System</Typography>
          <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
            <Person sx={{ mr: 1 }} /> Main Doc
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem button>
              <ListItemIcon><Home /></ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><Person /></ListItemIcon>
              <ListItemText primary="Patient" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, bgcolor: '#f9f9f9', p: 3 }}>
        <Toolbar />

        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          p: 2,
          bgcolor: '#007bff',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '1.3rem',
          borderRadius: 1,
        }}>
          PATIENTS LIST
        </Box>

        <Box sx={{ mt: 2 }}>
          <Button variant="contained" startIcon={<Add />} sx={{ backgroundColor: '#5bc0de', fontSize: '0.9rem' }}>
            ADD PATIENT
          </Button>
        </Box>

        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 2,
          flexWrap: 'wrap',
          gap: 1
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ mr: 1 }}>Show</Typography>
            <FormControl size="small" sx={{ minWidth: 60 }}>
              <Select defaultValue={10}>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={25}>25</MenuItem>
                <MenuItem value={50}>50</MenuItem>
              </Select>
            </FormControl>
            <Typography sx={{ ml: 1 }}>entries</Typography>
          </Box>
          <TextField size="small" variant="outlined" placeholder="Search" />
        </Box>

        <TableContainer component={Paper} sx={{ mt: 2, boxShadow: 2 }}>
          <Table sx={{ minWidth: 900 }}>
            <TableHead>
              <TableRow>
                {['Phone No', 'Name', 'Birthdate', 'Age', 'Address', 'Civil Status', 'Action'].map((header) => (
                  <TableCell key={header} sx={{ fontWeight: 'bold', fontSize: '1rem' }}>{header}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {patients.map((row, index) => (
                <TableRow key={index} hover>
                  <TableCell sx={{ fontSize: '0.95rem' }}>{row.phone}</TableCell>
                  <TableCell sx={{ fontSize: '0.95rem' }}>{row.name}</TableCell>
                  <TableCell sx={{ fontSize: '0.95rem' }}>{row.birthdate}</TableCell>
                  <TableCell sx={{ fontSize: '0.95rem' }}>{row.age}</TableCell>
                  <TableCell sx={{ fontSize: '0.95rem' }}>{row.address}</TableCell>
                  <TableCell sx={{ fontSize: '0.95rem' }}>{row.status}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <Button variant="contained" size="small" color="info" startIcon={<BugReport />} sx={{ fontSize: '0.7rem' }}>
                        Complaints <Chip label={row.complaints} size="small" sx={{ ml: 1 }} />
                      </Button>
                      <Button variant="contained" size="small" color="warning" startIcon={<Edit />} sx={{ fontSize: '0.7rem' }}>
                        Update
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
          <Typography variant="body2" color="text.secondary">Showing 1 to 10 of 10 entries</Typography>
          <Stack direction="row" spacing={1}>
            <Button size="small" variant="outlined">Previous</Button>
            <Button size="small" variant="contained" sx={{ minWidth: 36 }}>1</Button>
            <Button size="small" variant="outlined">Next</Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
