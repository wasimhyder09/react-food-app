import mealsImg from '../../assets/images/meals.jpg';
import classes from "./Header.module.css";
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
  return <>
    <header className={classes.header}>
      <h1>Order Meals</h1>
      <HeaderCartButton />
    </header>
    <div className={classes['main-image']}>
      <img src={mealsImg} alt="A table full of delicious food" />
    </div>
  </>
};

export default Header;