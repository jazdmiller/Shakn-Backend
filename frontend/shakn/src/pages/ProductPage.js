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
         Divider
 } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productActions'

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
    <div>
        <Link to="/products"><Button variant="text">Go Back</Button></Link>
        <Grid container spacing={4} justifyContent="center">
            <Grid item xs={6}>
                <img src={product.image} style={{ height: 600, width: 500, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}/>
            </Grid>
            <Grid item xs={6}>
                <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {/* <nav aria-label="main mailbox folders"> */}
                        <List>
                        <ListItem >                        
                            <ListItemText primary={product.name} />    
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
  )
}

export default ProductPage