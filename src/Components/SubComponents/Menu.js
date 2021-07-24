import '../../css/menu.css';

// display the menu items of the selected option
const Menu = (props)=>{
    const {tracker,menu,onMenu}=props
    const selectedOption = tracker[onMenu];
    return ( 
        <div id='menu-container'>
            <div id="menu">            
                <div>
                    {menu.list.map((option,index)=>{
                        return(
                            <div className={`${index===selectedOption?'active list':'list'}`} key={index}><span>{option}</span><span><i className="fas fa-chevron-right"></i></span></div>
                        )     
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default Menu;