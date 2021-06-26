import wallpaper from '../../assets/photos/wallpaper.jpg';
import cover from '../../assets/photos/favourites.png';
const Photos = (props)=>{
   
    return (
        <div className="image">
            {props.pick===0?<img src={wallpaper} alt='wallpaper' />:<img src={cover} alt='cover' />}            
        </div>
    );
}

export default Photos;

