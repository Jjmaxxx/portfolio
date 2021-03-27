import './App.css';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import React from 'react';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import ReactDOM from 'react-dom';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {page:'home'}
    
  }
  componentDidMount(){
    ReactDOM.render(<Home/>, document.getElementById("renderPages"));
  }
  switchLayout(newPage){
    console.log('a');
    this.setState({page:newPage});
    if(this.state.page === 'home'){
      console.log('if statement passed');
      ReactDOM.render(<Home/>, document.getElementById("renderPages"));
    }
    else if(this.state.page === 'about'){
      ReactDOM.render(<About/>, document.getElementById("renderPages"));
    }
    else if(this.state.page === 'projects'){
      ReactDOM.render(<Projects/>, document.getElementById("renderPages"));
    }
    else if(this.state.page === 'contact'){
      ReactDOM.render(<Contact/>, document.getElementById("renderPages"));
    }
  }
    render(){
      return (
        <div className="App">
          {/* <Grid container>
              <Grid item xs={3}> */}
                <Paper id = "navBar">
                  <Button onClick={()=>{this.switchLayout('home')}}>Home</Button>
                  <Button onClick={()=>{this.switchLayout('about')}}>About Me</Button>
                  <Button onClick={()=>{this.switchLayout('projects')}}>Projects</Button>
                  <Button onClick={()=>{this.switchLayout('contact')}}>Contact Me</Button>
                </Paper>
              {/* </Grid>
              <Grid item xs={9}> */}
                {/* <Paper id = "renderPages"> */}
                  {/*this.state.page*/}
                {/* </Paper> */}
                <div id= "renderPages">

                </div>
              {/* </Grid>
          </Grid> */}
        </div>
      );
  }
}

export default App;
