import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardMedia, CardActionArea, CardContent, Button, Typography } from '@mui/material'
import products from '../products.json'


function ProductCard({ product }) {
  return (
    <Link to={`/products/${product._id}`} style={{ textDecoration: 'none' }}>
        <Card sx={{ maxWidth: 345 }} style={{ border: "none", boxShadow: "none"}}>
        <CardActionArea>
        <CardMedia
        component="img"
        height="250"
        image={product.image}
        alt="green iguana"
        />
        <CardContent style={{ backgroundColor: "#DEE9F6"}}>
        <Typography style={{color: "#707070" }} gutterBottom variant="h5" component="div">
            {product.name}
        </Typography>

        <Typography style={{color: "#707070" }} gutterBottom variant="h6" component="div">
            ${product.price}
        </Typography>
        </CardContent>
        </CardActionArea>
    </Card>
  </Link>
//    <Box sx={{ minWidth: 225 }}>
//       <Card style={{ border: "none", boxShadow: "none"}}>{card}</Card>
//    </Box>
  )
}

export default ProductCard