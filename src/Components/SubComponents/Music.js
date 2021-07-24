import React from 'react';

import nowPlaying from '../../assets/music/nowPlaying.PNG';
import playlist from '../../assets/music/playlist.PNG';
import artist from '../../assets/music/artists.jpg';
import audiobooks from '../../assets/music/audiobooks.jpg';

// display the selected item from music menu
class Music extends React.Component{
   
    getPick = () => {
        const {pick} = this.props;
        
        switch(pick){
        case 1 :
            return playlist;
        case 2 :
            return artist;
        case 3 :
            return audiobooks;
        default:
            return nowPlaying;
        }
    };

    render(){
        return (
            <div className="image">
                {<img src={this.getPick()} alt='playlist'/>}            
            </div>
        );
    }
}

export default Music;

