import wallpaper from '../../assets/photos/wallpaper.png';
import cover from '../../assets/photos/cover.jpeg';
const Photos = (props)=>{
   
    return (
        <div className="image">
            {props.pick==="0"?<img src={wallpaper} alt='wallpaper' />:<img src={cover} alt='cover' />}            
        </div>
    );
}

export default Photos;

