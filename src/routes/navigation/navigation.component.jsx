import { Outlet,Link } from "react-router-dom";
import { Fragment ,useContext} from "react";
import "./navigation.styles.scss";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartIcon } from "../../components/cart-icon/cart-icon.component";
import { CartDropdown } from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
const Navigation=()=>{
  const{currentUser}=useContext(UserContext);
const {isCartOpen}=useContext(CartContext);
  const signOutHandler=async()=>{
    await signOutUser();
    
  }
  //console.log(currentUser);
    return(
      <Fragment>
           
        <div className="navigation-bar">
            <Link className="logo-container" to="/">
            <CrwnLogo className="logo"/>
            </Link>
          <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
            SHOP
        </Link>
        
        {
          currentUser?(<Link className="nav-link" onClick={signOutHandler} to="/auth">
          SIGN OUT
      </Link>):(<Link className="nav-link" to="/auth">
              SIGN IN
          </Link>)
        }
        <CartIcon/>
          </div>
          {isCartOpen && <CartDropdown/>}
        </div>
        <Outlet/>
        </Fragment>
    );
  }

  export default Navigation;