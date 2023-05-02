import React from 'react'
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'
import memories from './images/memories.png'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyles from './styles'
const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Container maxwidth='lg'>
        <AppBar className={classes.appBar} position='static' color='inherit'>
          <Typography variant='h2' align='center'>ItsABlog</Typography>
          <img src={memories} alt="itsablog-logo" height="60"/>
        </AppBar>
        <Grow in>
          <Container>
            <Grow container justify="space-between" alignItems='stretch' spacing={4}>
              <Grid item xs={12} sm={7}>
                 <Posts/>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form/>
                </Grid>
            </Grow>
          </Container>
        </Grow>
      </Container>
    </div>
  )
}

export default App
