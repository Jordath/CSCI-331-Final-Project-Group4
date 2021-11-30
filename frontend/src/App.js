import './App.css';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';
import Recipes from './components/showRecipes/showRecipes.js';
import Search from './components/searchRecipes/searchRecipes.js';
import useStyles from './style';

function App() {
  const classes = useStyles();
  return (
    <div className="App">
        <Container maxWidth ="lg">
          <AppBar className={classes.AppBar} position="static" color="inherit" >
            <Typography className={classes.heading} variant="h2" align="center">
              Recipes 
            </Typography>
          </AppBar>

          <Grow in>
            <Container>
              <Grid container justify="space-between" alignItems="stretch">
                <Grid item xs={12} sm={4}>
                  <AppBar className={classes.appBar} position="static" color="inherit">
                    <Search />
                  </AppBar>
                </Grid>
                <Grid item xs={12} sm={7}>
                  <AppBar className={classes.appBar} position="static" color="inherit">
                    <Recipes />
                  </AppBar>
                </Grid>


              </Grid>
            </Container>
          </Grow>

        </Container>
    </div>
  )
}

export default App;