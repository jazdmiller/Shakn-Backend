import React from 'react'
import Navbar from '../components/Navbar'
import '../assets/home.css'
import { Grid, Typography, Button } from '@mui/material'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'


function HomePage() {
  return (
    <div>
        <Navbar />
        <div className="home-img">
            <h1 className="title">SHAKN</h1>
        </div>

        <div className="goodsips-banner">
            <Grid container>
                <Grid container item xs={12} display="flex" justifyContent="center" sx={{ margin: 5}}>
                    <div class="sip-text-div">
                    <p className="sale-text">Summer Sale Time</p>
                    {/* <p id="sip-text">Sustainably made from recycled glass and sand, and naturally dyed with elements from the earth.</p> */}
                    <p id="sip-text">Save BIG on everything you need for your next soiree. Elevated drinkware essentials brought directly to you. </p>
                    </div>
                </Grid>
                <Grid item xs={6} display="flex" justifyContent="center" sx={{ marginTop: 7}}>
                    <img class="slide-up" src="./images/svitlana-vexxZA_JNso-unsplash.jpg" style={{  width: 500, height: 500, objectFit: "cover"}} />
                </Grid>
                <Grid item xs={6} display="flex" justifyContent="center" sx={{ marginTop: 20}}>
                    <div style={{ width: 400, textAlign: "center"}}>
                    <p id="description" style={{ color:"#6F7130"}}>
                    <em>Substantial without feeling heavy and stackable to save you shelf space.</em>
                    </p>
                    <div style={{marginTop: 20}}/>
                    <Button variant="text" ><Link style={{ textDecoration: "none", color: "#707070", fontSize: 20, border: "1px solid #707070", padding: 10}} to="/products">Shop Now</Link></Button>

                    </div>
                </Grid>
                <Grid item xs={6} display="flex" justifyContent="center" sx={{ marginTop: 40}}>
                    <div style={{ width: 400, textAlign: "center"}}>
                    <p id="description" style={{ color:"#DEE9F6"}}>
                    <em>Sustainably made from recycled glass and sand, and naturally dyed with elements from the earth.</em>
                    </p>
                    <div style={{marginTop: 20}}/>
                    <Button variant="text" ><Link style={{ textDecoration: "none", color: "#DEE9F6", fontSize: 20, border: "1px solid #DEE9F6", padding: 10}} to="/products">Shop Now</Link></Button>

                    </div>
                </Grid>
                <Grid item xs={6} display="flex" justifyContent="center" sx={{ marginTop: 27}}>
                    <img class="slide-up" src="./images/mathilde-langevin-vy91_-RLZ2Q-unsplash.jpg" style={{  width: 500, height: 500, objectFit: "cover"}} />
                </Grid>
                
            </Grid>
        </div>

        {/* <div className="feature-product-1">
            <Grid container>
                <Grid item xs={6} sx={{ borderRight: 1, width: 1, borderColor: 'black'}}>
                    <Box />
                </Grid>
            </Grid>
        </div>
        <div className="feature-product-2">
            <Grid container>

            </Grid>
        </div> */}

        <div className="finder-div">

        </div>

    </div>
  )
}

export default HomePage