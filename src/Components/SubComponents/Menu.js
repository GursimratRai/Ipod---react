const Menu = (props)=>{
    const {tracker,menu,onMenu}=props
    const selectedOption = tracker[onMenu];
    return ( 
        <div id="menu">
           
            <div>
                {menu.list.map((option)=>{
                    return(
                        <div className={`${option.id===selectedOption?'active list':'list'}`} key={option.id}><span>{option.name}</span><span><i class="fas fa-chevron-right"></i></span></div>
                    )     
                })
                }
            </div>
        </div>
    )
}

export default Menu;