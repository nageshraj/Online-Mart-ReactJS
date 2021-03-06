import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';
import {auth} from "./firebase";
function Header() {

    const[{basket, user}, dispatch]= useStateValue();

    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    };

    return (
        <div className='header'>
            <Link to="/">
             <img 
                className="header__logo" 
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG4n7eVtvck0TeekFE_ZY_Pb-nYn7iQpRaqQ&usqp=CAU'

                />
            </Link>
            
        

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to={!user && '/login'}>
                <div onClick={handleAuthentication} className="header__option">
                    <span className="header__optionLineOne">Hello {!user ? 'Guest':user.email}</span>
                    <span className="header__optionLineTwo">{user?'Sign Out':'Sign In'}</span>
                </div>
                </Link>


                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>    
                </div>

                <Link to="/checkout">
                <div className="header__optionBasket">
                    <ShoppingCartIcon/>
                    <span className="header__optionLineTwo header_basketCount" >{basket?.length}</span>
                </div>
                </Link>
                

                

            </div>

        </div>
    
    )
}

export default Header 
