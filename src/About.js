import './App.css';
import React from 'react';
import Paper from '@material-ui/core/Paper';
class About extends React.Component{
    render(){
      return(
        <div className="About">
          <Paper className = "paperBox">
              <p> about workk</p>
            </Paper>
            {()=>{
                console.log('home is run');
               
              }
            }
        </div>
        )
    }
}
  
export default About;
  