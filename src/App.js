import logo from './logo.svg';
import './App.css';
import { Container, Typography, Box, Paper, Button, AppBar, Toolbar } from "@mui/material";
import * as React from 'react';
import MyCalendar from './calendar.jsx';
import './App.css'; // Import your CSS file

function App() {
  return (
    <Box>
      <Box sx={{ bgcolor: "primary.main", height: "120px" }}>
        <table>
          <tr>
            <td>
              <img src={"logoUnss.png"} alt="logo" width={130} id="logo" />
            </td>
            <td>
              <Typography id="Top-Text" sx={{ textAlign: "center", bgcolor: "primary.main", color: "white" }}>
                <h1>УНИВЕРСИТЕТ ЗА НАЦИОНАЛНО И СВЕТОВНО СТОПАНСТВО</h1>
              </Typography>
              <Typography id="Bottom-Text" sx={{ color: "#c69a95" }}>
                <h5>Духът прави силата</h5>
              </Typography>
            </td>
          </tr>
        </table>
        <Typography id="Main-Text" sx={{ textAlign: "center", bgcolor: "secondary.main", height: "50px", color: "white", mt: "-1.3%"}}>
          <b>Teams Management</b>
          <Box id="admin" sx={{ float: "right", ml: "-10%", color: 'black'}}>
            <img src={"logoUnss.png"} alt="logo" width={35} id='adminimg' />
            <Typography id='admintext' sx={{ mt: 0, mb: 0, color: 'white' }}> Admin Admin</Typography>
          </Box>
        </Typography>
      </Box>
      <Container id="calendar">
        <MyCalendar /> {/* Render the calendar component here */}
      </Container>
      <footer>
        <Box sx={{ position: 'fixed', bottom: '0', left: '0', width: '100%', bgcolor: "primary.main", height: "60px", color: "white", textAlign: "center" }}>
          <Typography sx={{ marginTop: "1%" }}>Unss2023@Copyright</Typography>
        </Box>
      </footer>
    </Box>
  );
}

export default App;
