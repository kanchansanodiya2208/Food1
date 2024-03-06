import React, { useContext } from "react";
import classes from './HeaderCartButton.module.css';
import CartIcon from "./CartIcon";
import CartContext from "../Store/Cart-Context";

const HeaderCartButton = (props) =>{
const cartCtx = useContext(CartContext);

const numberOfCartItems = cartCtx.items.reduce((curnumber, item) =>{
//return curnumber + item.amount;

    return curnumber + Number(item.amount);
}, 0);
    return(
        <div>
       <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
         <CartIcon></CartIcon>
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>

        </button>
        </div>
    );
};

export default HeaderCartButton;