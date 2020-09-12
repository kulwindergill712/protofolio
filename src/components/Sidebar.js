import React from 'react'

import { elastic as Menu } from 'react-burger-menu';

export default props => {
    return (
        <Menu>
            <a className="menu-item" href="/">
                Home
      </a>

            <a className="menu-item" href="/project">
                Project
      </a>

            <a className="menu-item" href="/about">
                Resume
      </a>


            <a className="menu-item" href="/contact">
                Contact
      </a>

            <a className="menu-item" href="/sociallinks">
                Social Links
      </a>




        </Menu>
    );
};