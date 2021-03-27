import './App.css';
import React from 'react';
import Paper from '@material-ui/core/Paper';
class Projects extends React.Component{
    render(){
      return(
        <div className="Projects">
          <Paper className = "paperBox">
            <p> projects workk</p>
            </Paper>
            {()=>{
                console.log('home is run');
               
              }
            }
        </div>
        )
    }
}
  
export default Projects;