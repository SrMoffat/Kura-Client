import React from 'react';


const NavItem = props => {
    const { text, onItemClick } = props;

    const menuClick = (e) => {
        const { target } = e;
        const option = target.children.length >= 1 
                        ? target.querySelectorAll('span')[0].innerHTML 
                        : target.innerHTML;
        onItemClick(option);
    }



    return(
        <div className="nav-item" onClick={menuClick}>
            <span>
                {text}
            </span>
        </div>
        
    )
}

export default NavItem;