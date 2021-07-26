import React from 'react';
import { useRedux } from '../../hooks/useRedux';
import { Helmet } from 'react-helmet-async'
import { products } from '../../__mocks__/products';

import { makeStyles } from '@material-ui/styles';
import CartCard from '../../components/CartCard';
import Footer from '../../components/Footer';

import {
  Container, 
  Grid,
  Alert,
} from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    marginTop: '80px',
    marginBottom: '20px'
  },
  alertContainer: {
    marginTop: '20px',
    marginBottom: '20px'
  },
  title1: {
    color: '#484545',
    paddingBottom: '20px'
  }
});

export const Cart = () => {
    const { useAppDispatch, useAppSelector } = useRedux();
    const dispatch = useAppDispatch();
    const classes = useStyles();
    
    const itemsInCart = useAppSelector((state: any) => state.cart.items);
    
    return (
        <React.Fragment>
            <Helmet>
            <title> Carrinho | {process.env.REACT_APP_NAME} </title>
        </Helmet>
            {products.filter((product) => (
                itemsInCart.find((el) => el.id === product.id)
            )).length > 0 ? (
                <Container className={classes.container}>
                <Grid container md={12} xs={12}>
                    {products.filter((product) => (
                        itemsInCart.find((el) => el.id === product.id)
                    )).map((product) => (
                        <Grid container md={12} xs={12}>
                            <CartCard 
                                id={product.id}
                                title={product.title}
                                description={product.description}
                                image={product.media}
                                onRemove={(id) => dispatch({ type: 'cart/destroy', payload: { id: product.id }})}
                            />
                        </Grid>
                    ))}
                </Grid>
                </Container>
            ) : (
                <Container className={classes.alertContainer}>
                <Grid container md={12} xs={12}>
                    <Alert 
                    severity="warning"
                    style={{ width: '100%', padding: 0, margin: 0}}
                    >
                    Não há produtos para listar no momento!
                    </Alert>
                </Grid>
                </Container>
            )}
            <Footer />
        </React.Fragment>
    );
};