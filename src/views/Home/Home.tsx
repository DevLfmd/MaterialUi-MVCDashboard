import React from 'react';
import { useRedux } from '../../hooks/useRedux';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'
import { products } from '../../__mocks__/products';

import { makeStyles } from '@material-ui/styles';
import ProductCard from '../../components/ProductCard';
import Footer from '../../components/Footer';

import {
  Container, 
  Grid,
  Box,
  Card,
  Alert,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';

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

export const Home = () => {
  const { useAppDispatch } = useRedux();
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const navigate = useNavigate();
  const [myProducts, setMyProducts] = React.useState(products);

  return (
    <React.Fragment>
      <Helmet>
        <title> {process.env.REACT_APP_NAME} | Soluções em TI </title>
      </Helmet>
      <Box sx={{ mt: 10 }}>
        <Card>
          <CardContent>
            <Box>
              <TextField
                fullWidth
                onChange={(e: any) => {
                  setMyProducts(products.filter((product) => {
                    const value = e.target.value;
                    return (
                      product.id.includes(value) ||
                      product.description.includes(value) ||
                      product.title.includes(value) ||
                      product.createdAt.includes(value)
                    );
                  }));
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon
                        fontSize="small"
                        color="action"
                      >
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Buscar produto"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
      {myProducts.length > 0 ? (
        <Container className={classes.container}>
          <Grid container md={12} xs={12}>
            {myProducts.map((product) => (
              <Grid container md={4} xs={12}>
                <ProductCard 
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  image={product.media}
                  onSee={(id) => navigate(`produto/ver/${id}`)}
                  onBuy={(id) => dispatch({ type: 'cart/store', payload: { id }})}
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