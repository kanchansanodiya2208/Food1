import React, { Fragment } from "react";
import classes from './Header.module.css';
import HeaderCartButton from "../Cart/HeaderCartButton";

const  Header = (props) =>{
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>React Foods</h1>
                <HeaderCartButton onClick={props.onShowCart}  />
            </header>

            <div className={classes['main-image']}>
                <img src='' alt='A table full of delicious food!' />
            </div>
        </Fragment>

    );
};
export default Header;

