import React from 'react'
import { Sidebar, InputItem, DropdownItem, Icon, Item, Logo, LogoText } from 'react-sidebar-ui'
import 'react-sidebar-ui/dist/index.css';
import './side.css';
class App extends React.Component {
    render() {
        if (window.location.pathname === '/admin') return null;
        return (

            <div >
                <Sidebar bgColor='black' isCollapsed={false}>
                    <Logo image='data:image/jpeg;base64,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' width="500" height="600">


                    </Logo><br></br>
                    <LogoText >PortFolio</LogoText>


                    <Item bgColor='black' >
                        <Icon><i className="fas fa-home" /></Icon>
                        <a className="menu-item" href="/">
                            Go To Website
                        </a>
                    </Item>
                    <Item bgColor='black'>
                        <Icon><i className="fas fa-info" /></Icon>
                        <a className="menu-item" href="/admin/social">
                            Social Links
                        </a>
                    </Item>
                    <Item bgColor='black'>
                        <Icon><i className="fas fa-sitemap" /></Icon>
                        <a className="menu-item" href="/admin/project">
                            Projects
                        </a>
                    </Item>
                    <Item bgColor='black'>
                        <Icon><i className="fas fa-sitemap" /></Icon>
                        <a className="menu-item" href="/admin/blog">
                            Blog
                        </a>
                    </Item>
                    <Item bgColor='black'>
                        <Icon><i className="far fa-address-book" /></Icon>
                        <a className="menu-item" href="/admin/contact">
                            Contact US
                        </a>
                    </Item>
                    <Item bgColor='black'>
                        <Icon><i className="fas fa-rss-square" /></Icon>
                        <a className="menu-item" href="/admin/settings">
                            Settings
                        </a>
                    </Item>

                </Sidebar>
            </div>
        )
    }
};
export default App;