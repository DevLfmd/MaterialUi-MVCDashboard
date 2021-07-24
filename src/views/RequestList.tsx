import { Helmet } from 'react-helmet-async';
import {
  Box,
  Container,
  Grid,
  Pagination
} from '@material-ui/core';
import RequestListToolbar from '../components/requests/RequestListToolbar';
import RequestCard from '../components/requests/RequestCard';
import { requests, Request } from '../__mocks__/requests';

const RequestList = () => (
  <>
    <Helmet>
      <title>Pedidos | FastFood</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <RequestListToolbar />
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {requests.map((request: Request) => (
              <Grid
                item
                key={request.id}
                lg={4}
                md={6}
                xs={12}
              >
                <RequestCard request={request} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Box>
  </>
);

export default RequestList;
