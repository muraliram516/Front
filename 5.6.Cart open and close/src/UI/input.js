import classes from './input.module.css';

const Input = (props) => {
return(
<div className={classes.Input}>
    <label htmlFor={props.Input.div}>{props.label}</label>
    <input {...props.input} />
</div>
);
};


export default Input;