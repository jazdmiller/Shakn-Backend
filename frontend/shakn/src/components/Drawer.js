import React, { useState } from 'react'
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';


function DrawerComp() {
    const [open, setOpen] = useState(false)
  return (
    <>
        <Drawer open={open} onClose={()=>setOpen(false)}>
            <List>
                <ListItemButton onClick={()=> setOpen(false)}>
                    <ListItemIcon>
                        <ListItemText>Cart</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton onClick={()=> setOpen(false)}>
                    <ListItemIcon>
                        <ListItemText>Shop</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton onClick={()=> setOpen(false)}>
                    <ListItemIcon>
                        <ListItemText>Cocktail Finder</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton onClick={()=> setOpen(false)}>
                    <ListItemIcon>
                        <ListItemText>Login</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton onClick={()=> setOpen(false)}>
                    <ListItemIcon>
                        <ListItemText>Sign Up</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
            </List>
        </Drawer>
        <IconButton sx={{ marginLeft: "auto" }} onClick={()=>setOpen(!open)}>
            <MenuRoundedIcon />
        </IconButton>
    </>
  )
}

export default DrawerComp