import {
  Box,
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import { indigo } from '@material-ui/core/colors';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const TotalProfit = (props: any) => (
  <Card {...props}>
    <CardContent>
      <Grid
        container
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h6"
          >
            TOTAL LUCRO
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
            R$23,200
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: indigo[600],
              height: 56,
              width: 56
            }}
          >
            <AttachMoneyIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 2
        }}
      >
        <ArrowUpwardIcon sx={{ color: indigo[900] }} />
        <Typography
          variant="body2"
          sx={{
            color: indigo[900],
            mr: 1
          }}
        >
          32%
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Desde o último mês
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default TotalProfit;
