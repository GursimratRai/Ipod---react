import wallpaper from '../../assets/games/Pac-man.png';
import cover from '../../assets/games/Sonic.png';

const Games = (props)=>{
    return (
        <div className="image">
            {props.pick===0?<img src={wallpaper} alt='wallpaper' />:<img src={cover} alt='cover' />}            
        </div>
    )
}

export default Games;

