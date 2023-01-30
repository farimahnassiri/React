import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';


const HeaderCardButton = (props) => {
    const cartctx = useContext(CartContext);
    //we can do .length for a bundle of items
    const numberOfCartItems = cartctx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);
return <button className={classes.button} onClick={props.onClicking}>
    <span className={classes.icon}>
        <CartIcon/>
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>{numberOfCartItems}</span>
</button>
};

export default HeaderCardButton;
