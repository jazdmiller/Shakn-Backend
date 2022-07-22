import React, { useState } from 'react'
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
 } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box } from '@mui/system';
import DrawerComp from './Drawer';
import { Link } from 'react-router-dom'

function Navbar({links}) {

    const [value, setValue] = useState()
    const theme = useTheme()
    console.log(theme)
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    console.log(isMatch)
  return (
    <AppBar sx={{backgroundColor: '#DEE9F6'}}>
        <Toolbar>
            { isMatch ? <>
            <Typography>
                <ShoppingCartIcon />
            </Typography>
            <DrawerComp /> 
            </> :
            <Grid sx={{placeItems: "center"}} container spacing={1}>
                <Grid item xs={2} >
                    <Typography>
                        <ShoppingCartIcon />
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
                    <Box display="flex">
                        <Link to="/cart" style={{ textDecoration: 'none ', color: 'white' }}><Tab label="Cart"></Tab></Link>
                        <Link to="/login" style={{ textDecoration: 'none ', color: 'white' }}><Tab label="Login"></Tab></Link>
                        <Link to="/signup" style={{ textDecoration: 'none ', color: 'white' }}><Tab label="Sign Up"></Tab></Link>
                    </Box>
                </Grid>
            </Grid>}
        </Toolbar>
    </AppBar>
  )
}

export default Navbar