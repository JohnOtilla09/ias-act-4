import styles from './Button.module.css';

const Button = (props) => {
    return <button className={`${styles["button-50"]}`} role='button'>{ props.children }</button>;
};

export default Button;