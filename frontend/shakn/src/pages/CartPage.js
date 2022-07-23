import React, { useEffect } from 'react'
import { Link, useParams, useSearchParams, useLocation } from 'react-router-dom'
import { Grid, 
         List, 
         ListItem, 
         ListItemAvatar, 
         Avatar, 
         ListItemText, 
         TextField, 
         MenuItem, 
         IconButton,
         Box,
         Card,
         CardContent,
         Typography,
        } 
from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../actions/cartActions'
import '../assets/cart.css'
import Navbar from '../components/Navbar';


function CartPage() {
  const [searchParams,setSearchParams]=useSearchParams()
  const qty=searchParams.get('qty')
  const {id}=useParams()
  const productId = id

  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart
  const quantities = [
    {
      value: 1,
      label: '1',
    },
    {
      value: 2,
      label: '2',
    },
    {
      value: 3,
      label: '3',
    },
    {
      value: 4,
      label: '4',
    },
  ];

  useEffect(() => {
    if(productId){
        dispatch(addToCart(productId, qty))
    }
    
}, [dispatch, productId, qty])

const removeFromCartHandler = (id) => {
  dispatch(removeFromCart(id))
}

  return (
  
      <div >
          <Navbar />
          <div style={{ marginTop:150 }}/>
          <h1 className="shop-title">Your Cart</h1>
    <Grid container spacing={4}>
        <Grid item xs={8}>
            
            {cartItems.length === 0 ? 
            <h2>Your cart is empty.<Link to='/products'>Go Back</Link></h2>
             : <List sx={{ marginLeft: 15, marginTop: 5,width: '100%', maxWidth:600, bgcolor: '#DEE9F6' }}>
                  {cartItems.map(item => (
                    <ListItem key={item.product}>
                      <ListItemAvatar>
                        <Avatar src={item.image}/>
                      </ListItemAvatar>
                      <ListItemText>
                        <Link style={{ textDecoration: "none", color: "#6F7130"}} to={`/product/${item.product}`}>{item.name}</Link>
                      </ListItemText>
                      <ListItemText>${item.price}</ListItemText>
                      <TextField
                          id="outlined-select-qty"
                          select
                          label="Select"
                          value={item.qty}
                          onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                          helperText="Please select a quantity"
                          >
                          {quantities.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                              {option.label}
                              </MenuItem>
                          ))}
                      </TextField>
                      <IconButton onClick={() => removeFromCartHandler(item.product)} aria-label="delete" sx={{ color: "gray", marginLeft: 5}}>
                        <DeleteIcon />
                      </IconButton>

                    </ListItem>
          
                  ))}
               </List>
            }
        </Grid>
        <Grid item xs={4}>
        <Box sx={{ maxWidth: 300 , marginTop: 10}}>
          <Card variant="outlined" sx={{ backgroundColor: "#fffcf2"}}>
            <CardContent>
              <Typography variant="h4">TOTAL</Typography>
              <Typography variant="h6" sx={{ marginTop: 3}}>${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</Typography>
            </CardContent>
          </Card>
        </Box>
        </Grid>
    </Grid>
    </div>
  )
}

export default CartPage