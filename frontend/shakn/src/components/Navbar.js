import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, 
         Button, 
         Drawer, 
         Grid, 
         Tab, 
         Tabs, 
         Toolbar, 
         Typography,
         useTheme,
         useMediaQuery,
         useScrollTrigger,
         Slide,
         CssBaseline,
         IconButton,
 } from '@mui/material'
import LocalBarIcon from '@mui/icons-material/LocalBar';
import { Box } from '@mui/system';
import DrawerComp from './Drawer';
import { Link } from 'react-router-dom'
import { logout } from '../actions/userActions'


function HideOnScroll(props) {
    const { children } = props
    const trigger = useScrollTrigger()

   

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    )
}
function Navbar(props) {

    const [value, setValue] = useState()
    const theme = useTheme()
    console.log(theme)
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    console.log(isMatch)

    const userLogin = useSelector(state => state.userLogin)
const { userInfo } = userLogin

    const dispatch = useDispatch()

    const handleLogout = () => {
        console.log('logout')
        dispatch(logout())
    }





  return (
    <React.Fragment>
        <CssBaseline />
        <HideOnScroll {...props}>
    <AppBar sx={{backgroundColor: '#6F7130'}} style={{ marginBottom: 20}}>
        <Toolbar>
            { isMatch ? <>
            <Typography>
                <LocalBarIcon />
            </Typography>
            <DrawerComp /> 
            </> :
            <Grid sx={{placeItems: "center"}} container spacing={1}>
                <Grid item xs={2} >
                    <Typography>
                        <IconButton >
                            <Link to="/">
                                <LocalBarIcon sx={{ color: "#C5C6AC"}}/>
                            </Link>
                        </IconButton>
                        
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    {/* <Tabs indicatorColor="secondary" 
                          textColor="inherit" 
                          value={value} 
                          onChange={(e, val) => setValue(val)}> */}

                        <Link to="/products" style={{ textDecoration: 'none ', color: 'white' }}><Tab label="Shop"></Tab></Link>
                        <Link to="/cocktailfinder" style={{ textDecoration: 'none ', color: 'white' }}><Tab label="Cocktail Finder"/></Link>

                    {/* </Tabs> */}
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={4}>
                          {userInfo ? (
                            <Box display="flex">
                                <Link to="/cart" style={{ textDecoration: 'none ', color: 'white'}}><Tab label="Cart"></Tab></Link>
                                <Link to="/profile" style={{ textDecoration: 'none ', color: 'white' }}><Tab label="Profile"></Tab></Link>
                                <Tab onClick={handleLogout} label="Logout"></Tab>
                            </Box>
                          ) : (
                            <Box display="flex">
                            <Link to="/cart" style={{ textDecoration: 'none ', color: 'white'}}><Tab label="Cart"></Tab></Link>
                            <Link to="/login" style={{ textDecoration: 'none ', color: 'white' }}><Tab label="Login"></Tab></Link>
                            <Link to="/signup" style={{ textDecoration: 'none ', color: 'white' }}><Tab label="Sign Up"></Tab></Link>
                        </Box>
                          )}

                    

                </Grid>
            </Grid>}
        </Toolbar>
        <div id="scroll-container">
        <p id="scroll-text">Sustainable drinware. &nbsp; Good sips for good <em>moments</em>. &nbsp;Sustainable drinware. &nbsp; Good sips for good <em>moments</em>. &nbsp;Sustainable drinware. &nbsp; Good sips for good <em>moments</em>. &nbsp; Sustainable drinware. &nbsp; Good sips for good <em>moments</em>. &nbsp;Sustainable drinware. &nbsp; Good sips for good <em>moments</em>. &nbsp;</p>
        </div>
    </AppBar>
  
    </HideOnScroll>
    </React.Fragment>
    
    
  )
}

export default Navbar