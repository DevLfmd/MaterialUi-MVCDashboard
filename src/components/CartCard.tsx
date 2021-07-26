import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Delete } from '@material-ui/icons';

type TProps = {
  id: string;
  title: string;
  image: string;
  description: string;
  onRemove: (id: string) => void;
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
    justifyContent: 'flex-end'
  }
});

const Component: React.FC<TProps> = ({ id, title, image, description, onRemove }) => {
  const classes = useStyles();
  return (
    <Card elevation={3} className={classes.card}>
        <Grid container xs={12} md={12}>
            <Grid xs={12} md={12}>
                <CardHeader title={title} />
            </Grid>
            <Grid xs={6} md={6}>
                <CardMedia
                    sx={{
                        width: '250px',
                        height: '80px',
                        maxWidth: '256px',
                        maxHeight: '256px'
                    }}
                    image={image}
                    title="Paella dish"
                />
            </Grid>
            <Grid xs={6} md={6}>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    {description}
                    </Typography>
                </CardContent>
            </Grid>
            <Grid xs={12} md={12}>
                <CardActions className={classes.cardActions}>
                    <Button onClick={() => onRemove(id)}>
                        <Delete />&nbsp; Remover
                    </Button>
                </CardActions>
            </Grid>
        </Grid>
    </Card>
  );
};

export default Component;