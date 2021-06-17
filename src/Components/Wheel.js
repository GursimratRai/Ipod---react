import React from 'react';

class Wheel extends React.Component{
    render(){
        return (
           <div style={styles.wheelContainer}>
             <div style={styles.wheel}>

               <div style = {styles.Menu}><b>Menu</b></div>
               <div style = {styles.backwardBtn}><i className="fas fa-fast-backward"></i></div>
               <div style = {styles.forwardBtn}><i className="fas fa-fast-forward"></i></div>
               <div style = {styles.playBtn}><i className="fas fa-play"></i><i className="fas fa-pause"></i></div>
               <div style = {styles.selectBtn}></div>

             </div>
           </div>
        );
    };
};

const styles = {
    wheelContainer:{
        width: 200,
        height: 150,
        backgroundColor:'#ccc'
    },
    wheel : {
      width: 150,
      height:150,
      margin:'auto',
      borderRadius: '100%',
      position:'Relative',
      backgroundColor:'white'
    },
    Menu:{
      position:'absolute',
      top:10,
      left:60
    },
    forwardBtn:{
      position:'absolute',
      top:65,
      right:10
    },
    backwardBtn:{
      position:'absolute',
      top:65,
      left:10
    },
    playBtn:{
      position:'absolute',
      bottom:10,
      left:65
    },
    selectBtn : {
        width:75,
        height:75,
        borderRadius: 50,
        position:'absolute',
        top:'25%',
        left:'25%',
        backgroundColor: '#777'
    }
}

export default Wheel;