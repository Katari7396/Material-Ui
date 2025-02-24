import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useState } from 'react'

function ProductCard ({product}) {

    const [addToCart,setAddToCart] = useState(false);

    const handleAddToCart = () => {
        setAddToCart(true);
        alert(`${product.name} has been added to cart`)
    }

  return (
    <div>
        <Card style={{width:250, marginLeft:30}}>

            <CardMedia 
            component='img'
            height="180"
            image={product.image}
            alt={product.name}/>

            <CardContent>
                <Typography variant='h6'>
                    {product.name}
                </Typography>
                {/* <Typography variant='body2' color='secondary'>
                    {product.description}
                </Typography> */}
                <Typography variant='h6' color='primary' sx={{mt:2}}>
                    💰 {product.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small' color='primary' onClick={handleAddToCart}>
                {addToCart ? 'Added to cart' : 'Add to cart'}
                </Button>
            </CardActions>
        </Card>
    </div>
  )
}

export default ProductCard
