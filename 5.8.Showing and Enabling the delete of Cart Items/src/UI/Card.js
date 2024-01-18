import classes from './Card.module.css';

const Card = props => {
    return <div className={classes.Card}>{props.childrn}</div> 
};

export default Card;