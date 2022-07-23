import React, { useState, useEffect }from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Grid,
         Box,
         Button,
         List,
         ListItem,
         ListItemButton,
         ListItemIcon,
         ListItemText,
         TextField,
         MenuItem,
         Divider,
         IconButton
 } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productActions'
import Navbar from '../components/Navbar'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';

function ProductPage() {
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
  const [qty, setQty] = useState(1)
  const dispatch = useDispatch()
  const { id } = useParams()
  const productDetails = useSelector( state => state.productDetails)
  const { loading, error, product } = productDetails
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(listProductDetails(id))

  }, [dispatch])

  const addToCartHandler = () => {
      navigate(`/cart/${id}?qty=${qty}`)
  }
  return (
    <div className="shop-container">
      <div>
      < Navbar />
      <div style={{ marginTop: 150}}/>
        <Link style={{ marginLeft: 130}}to="/products"><IconButton><KeyboardBackspaceOutlinedIcon fontSize="large" sx={{}}/></IconButton></Link>
        <div style={{ marginBottom: 10}}/>
        <Grid container spacing={4}  sx={{ marginLeft: 14, marginRight: 2, marginTop: -5}}>
            <Grid item xs={5}>
                <img src={product.image} style={{ height: 500, width: 500, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}/>
            </Grid>
            <Grid container item xs={6} display="flex" justifyContent="center" alignItems="center">
                <Box sx={{ boxShadow: 2, width: '50%', height: 340, maxWidth: 360, bgcolor: '#fffcf2' }}>
                    {/* <nav aria-label="main mailbox folders"> */}
                        <List>
                        <ListItem >                        
                            <ListItemText style={{ fontSize: 20}} primary={product.name} />    
                        </ListItem>
                        <Divider />
                        <ListItem >
                            <ListItemText >${product.price}</ListItemText>
                        </ListItem>                      
                    {/* </nav> */}
                    <Divider />                                       
                        <ListItem>                     
                            <ListItemText>{product.description}</ListItemText>                 
                       </ListItem>
                       <ListItem>
                        <TextField
                            id="outlined-select-qty"
                            select
                            label="Select"
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                            helperText="Please select a quantity"
                            >
                            {quantities.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                       </ListItem>
                        <ListItem disablePadding>
                            <Button variant="text" onClick={addToCartHandler} value={qty}>Add to Cart</Button>
                        </ListItem>
                        </List>
    
                </Box>
            </Grid>
        </Grid>
        <Grid container spacing={2}>
         
        </Grid>
        </div>
    </div>
  )
}

export default ProductPage