import React from 'react'
import ProductCard from './productcard'
import ProductData from './ProductData.json'
import { AppBar,Grid,Typography } from '@mui/material'

function Card1() {
    // const product = {
    //     name: "Product 1",
    //     description:"This is an amazing product",
    //     price: 25.99,
    //     image:'https://cdn.pixabay.com/photo/2024/05/06/17/02/burgers-8743798_1280.jpg'
    // }
  return (
    <div>
         <AppBar sx={{backgroundColor:'#ff9800'}}>
                <Typography sx={{textAlign:"center",padding:2}} variant='h5'> FOOD MENU </Typography>
        </AppBar>
        <div style={{padding:'10px', marginTop:'100px'}}>
            <Grid container spacing={3} columnSpacing={4}>
                {ProductData.map((product)=>(
                    <Grid item key={product.id}>

                    <ProductCard product={product}/>

                    </Grid>
                ))}

            </Grid>
        </div>
    </div>
  )
}

export default Card1

