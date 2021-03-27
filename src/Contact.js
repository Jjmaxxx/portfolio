import './App.css';
import React from 'react';
import Paper from '@material-ui/core/Paper';
class Contact extends React.Component{
    render(){
      return(
        <div className="Contact">
            <Paper className = "paperBox">
              <p> contact workk</p>
            </Paper>
            {()=>{
                console.log('home is run');
               
              }
            }
        </div>
        )
    }
}
  
export default Contact;