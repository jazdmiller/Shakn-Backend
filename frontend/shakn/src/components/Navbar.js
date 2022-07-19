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
         useMediaQuery
 } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box } from '@mui/system';
import DrawerComp from './Drawer';

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
                    <Tabs indicatorColor="secondary" 
                          textColor="inherit" 
                          value={value} 
                          onChange={(e, val) => setValue(val)}>

                        <Tab label="Shop"/>
                        <Tab label="Cocktail Finder"/>

                    </Tabs>
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={4}>
                    <Box display="flex">
                        <Button sx={{marginLeft:'auto', background: 'none', borderColor: 'none'}} variant="contained">Cart</Button>
                        <Button sx={{marginLeft:1}} variant="contained">Login</Button>
                        <Button sx={{marginLeft:1}}variant="contained">Sign Up</Button>
                    </Box>
                </Grid>
            </Grid>}
        </Toolbar>
    </AppBar>
  )
}

export default Navbar