import React, { useState  } from 'react'
import './NavBar.css'
import {useHistory} from 'react-router-dom'
import Icon from 'react-icons-kit'
import { shoppingCart } from 'react-icons-kit/fa';
import {useSelector} from 'react-redux'
import logo from './navbar_assets/logo.png'
function NavBar(){
    const [cartProducts] = useState([useSelector(state => state.home.cartValue)]);
    const [toggleBurger, setToggleBurger] = useState(false);
    const history = useHistory();
    console.log(cartProducts.length)
    return (
        <body>
            <nav className="nav">
                <div className="logo">
                    <img className='logo' src={logo} /> 
                </div>

                <ul className={toggleBurger === true ? 'nav-links nav-active ' : 'nav-links'}>
                    <li ><button onClick={() => history.push('/')}>Home</button></li>
                    <li ><button onClick={() => history.push('/about') }>About</button></li>
                    <li>
                        <button> Orders </button>
                    </li>
                    <li >
                        <button onClick={()=>history.push('/cart')} style={{fontSize:"14px"}}>
                            <Icon icon={shoppingCart} size={24} />
                            [{cartProducts[0].length}]
                        </button>
                    </li>
                    <li><div id="google_translate_element"></div></li>
                   
                </ul>
                
                <div className={toggleBurger === true ? 'burger toggle' : 'burger'} onClick={() => setToggleBurger(!toggleBurger)}>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                </div>

            </nav>
        </body>
    );
    
}

export default NavBar;