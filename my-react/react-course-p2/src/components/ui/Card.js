import classes from "./Card.module.css";

function Card(props) {
  return <div className={classes.card}>
    {/* Holds all content*/}
    {props.children}
  </div>
}

export default Card;
