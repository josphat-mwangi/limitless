import React, { Component } from 'react'
import { MenuItems } from './MenuItem'
import './Navbar.css'
import logo from '../img/logo.png'


class Navbar extends Component{
   
    state = { clicked: false}
    handleClick =()=>{
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
            <nav className={ 'NavbarItems drop-shadow-lg'  }>
                <img src={ logo } className="w-20 h-20 mx-auto"  alt="Logo" height="220" width="220" loading="lazy" />
               
                
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fa-solid fa-times": 'fa-solid fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) =>{
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}  
                </ul>
            </nav>
        )
    }
}

export default Navbar