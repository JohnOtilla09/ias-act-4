import styles from './Button.module.css';

const Button = (props) => {
    return <button className={`${styles["button-50"]}`}>{ props.children }</button>;
};

export default Button;