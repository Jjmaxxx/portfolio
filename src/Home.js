import './App.css';
import React from 'react';
//import Image from 'material-ui-image';
import Paper from '@material-ui/core/Paper';
import Image from './code.jpg';
import { sizing } from '@material-ui/system';
import Card from "@material-ui/core/Card";
const styles = {
  paperContainer:{
    backgroundImage: `url(${Image})`,
    minWidth:'50%',
    minHeight:'50%',
}}
class Home extends React.Component{
    render(){
      return(
        <div className="Home">
          <Paper height = "100%" width = "100%" style = {styles.paperContainer}> 
              
            </Paper>
        </div>
        )
    }
}
  
export default Home;
  