import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRedux } from '../../hooks/useRedux';
import { Helmet } from 'react-helmet-async'
import { products } from '../../__mocks__/products';
import {
    Container,
    Grid,
    Typography,
    Card,
    Box,
    Button
} from '@material-ui/core';
import { ShoppingCart, ArrowBack } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    container: {
        marginTop: '100px'
    },
    realPrice: {
        textDecoration: 'line-through',
        color: 'gray'
    },
    promotionalPrice: { color: 'green' }
});

export const ProductDetails = () => {
    const { id } = useParams();
    const { useAppDispatch } = useRedux();
    const dispatch = useAppDispatch();  
    const classes = useStyles();
    const navigate = useNavigate();
    const [product] = React.useState(products.filter((product) => product.id === id)[0]);

    return (
        <React.Fragment>
            <Helmet>
                <title> {product.title} | {process.env.REACT_APP_NAME} </title>
            </Helmet>
            <Container className={classes.container}>
                <Card elevation={3}> 
                    <Button onClick={() => navigate('/')} startIcon={<ArrowBack/>}>
                        Voltar
                    </Button>
                    <Grid padding={2} container xs={12} md={12}>
                        <Grid xs={12} md={6}>
                            <img width="500px" height="314px" alt="detalhes do produto" src={product.media} />
                        </Grid>
                        <Grid xs={12} md={6}>
                            <Typography variant="h1" component="h1">{product.title}</Typography>
                            <Box style={{ marginTop: 5 }}>
                                <Typography className={classes.realPrice} variant="h4" component="h4">De: R$ {product.realPrice.toFixed(2)}</Typography> 
                                <Typography className={classes.promotionalPrice} variant="h4" component="h4">Por: R$ {product.promotionalPrice.toFixed(2)}</Typography>
                                <Typography variant="button" component="span">Disponibilidade: {product.qtdInStock > 0 ? 'Em estoque' : 'Fora de estoque' } </Typography>
                                <Typography variant="h5" component="p">Descrição: {product.description}</Typography>
                                <Button
                                    style={{ marginTop: 30 }}
                                    color="primary"
                                    disabled={false}
                                    fullWidth
                                    size="large"
                                    variant="contained"
                                    onClick={(id) => dispatch({ type: 'cart/store', payload: { id: product.id }})}
                                    startIcon={<ShoppingCart />}
                                > Adicionar ao carrinho</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Card>
            </Container>
        </React.Fragment>
    );
};