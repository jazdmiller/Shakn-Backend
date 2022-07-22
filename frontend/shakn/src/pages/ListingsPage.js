import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import { ReactDOM } from 'react'
import { Grid } from '@mui/material'
import { makeStyles } from '@mui/material'
import ProductCard from '../components/ProductCard'




function ListingsPage() {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const {error, loading, products} = productList 

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])


  return (
    <div>
      <h1>Products</h1>
      {loading ? <h2>Loading...</h2>
      : error ? <h3>{error}</h3>
        : 
        <Grid container spacing={4}>
        {products.map(product => {
          return(
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ProductCard product={product}/>
            </Grid>
          )
        })}
      </Grid>
 } </div>
        

  )
    }
    // <Grid item xs={12} sm={6} md={4} lg={3}>
    //     <ProductCard />
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={4} lg={3}>
    //     <ProductCard />
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={4} lg={3}>
    //     <ProductCard />
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={4} lg={3}>
    //     <ProductCard />
    //   </Grid>  
  
export default ListingsPage