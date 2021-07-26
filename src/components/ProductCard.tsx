import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { ShoppingCart, RemoveRedEye } from '@material-ui/icons';

type TProps = {
  id: string;
  title: string;
  image: string;
  description: string;
  onSee: (id: string) => void;
  onBuy: (id: string) => void;
};

const useStyles = makeStyles({
  card: { 
    margin: 3, 
    width: 100 + '%', 
    display: 'flex',
    flexDirection: 'column', 
    justifyContent: 'space-between' 
  },
  cardActions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

const Component: React.FC<TProps> = ({ id, title, image, description, onSee, onBuy }) => {
  const classes = useStyles();
  return (
    <Card elevation={3} className={classes.card}>
      <CardHeader title={title} />
      <CardMedia
        sx={{
          height: 0,
          paddingTop: '56.25%', // 16:9
        }}
        image={image}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button onClick={() => onSee(id)}>
          <RemoveRedEye />&nbsp; Ver Mais
        </Button>
        <Button onClick={() => onBuy(id)}>
          <ShoppingCart />&nbsp; Comprar
        </Button>
      </CardActions>
    </Card>
  );
};

export default Component;