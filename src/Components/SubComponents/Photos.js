
const Photos = (props)=>{
   
    return (
        <div className="image">
            {props.pick==="0"?<img src="./assets/wallpaper.png" alt='wallpaper' />:<img src="./assets/cover.jpeg" alt='wallpaper' />}            
        </div>
    );
}

export default Photos;

