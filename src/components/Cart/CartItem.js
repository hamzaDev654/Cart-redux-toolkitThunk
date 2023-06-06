import { Fragment } from "react";
import { useDispatch , useSelector} from "react-redux";
import { cartActions } from "../store/cart-slice";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const cartData = useSelector(state=>state.cart.items);
  
  const { id, title, quantity, total, price } = props.itemsData;

  const items = {
    id,
    price,
    title,
  };
  const increaseItemHandler = () => {
    dispatch(cartActions.addItemToCart(items));
  };

  const decreaseItemsHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <Fragment>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseItemsHandler}>-</button>
          <button onClick={increaseItemHandler}>+</button>
        </div>
      </div>
    </Fragment>
  );
};

export default CartItem;
