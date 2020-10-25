import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom' 
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.components';
import { selectCartHidden } from '../../redux/selectors/cart.selectors'
import { selectCurrentUser } from '../../redux/selectors/user.selectors';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link to='/' className='logo-container' >
            <Logo className='logo'/>
        </Link>    
        <div className="options">
            <Link className="option" to='/shop'>SHOP</Link>
            <Link className="option" to='/contact'>CONTACT</Link>
            {
                currentUser ? (
                    <div className="option" onClick={()=> auth.signOut() }>
                        Sign Out
                    </div>
                ) : (
                   <Link className='option' to='/signin'>
                        SIGN IN
                   </Link>
                )
            }
            <CartIcon />
        </div>
        { !hidden && <CartDropdown />}
        
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})


// const mapStateToProps = state => ({
//     currentUser: selectCurrentUser(state),
//     hidden: selectCartHidden(state)
// })

// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//     currentUser,
//     hidden
// })

export default connect(mapStateToProps)(Header)