import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import styles from './Home.module.css';

import pdf from '../../assets/ENCABO_OTILLA_SOLANOY_ACT-4.pdf';

const Home = (props) => {
    return (
        <Card>
            <div className={styles.home}>
            <h1>Welcome to Page</h1>
            <a href={pdf} download='ENCABO_OTILLA_SOLANOY_ACT-4' rel="noreffer" ><button className={`${styles['button-64']}`}><span className={styles.text}>Download</span></button></a>
            <Button onClick={props.onLogout}>Logout</Button>
            </div>
        </Card>
    );
};

export default Home;