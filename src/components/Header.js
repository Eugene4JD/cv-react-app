import React from 'react';

const Header = () =>{
    return(
        <div className="ui secondary pointing menu">
            <a class="item active">
                Home
            </a>
            <a class="item">
                Projects
            </a>
            <a className="item">
                Links
            </a>
        </div>
    );
}

export default Header;