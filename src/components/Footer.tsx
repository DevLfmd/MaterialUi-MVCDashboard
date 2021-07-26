import {
    AppBar,
    Container,
    Toolbar,
    Typography
} from '@material-ui/core';

const Component = () => (
    <AppBar position="static" color="primary">
        <Container maxWidth="md">
            <Toolbar>
                <Typography variant="body1" color="inherit">
                    © 2021 { process.env.REACT_APP_NAME }
                </Typography>
            </Toolbar>
        </Container>
    </AppBar>
);

export default Component;