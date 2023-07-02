import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import styles from './Home.module.css';

const Home = (props) => {
    const downloadHandler = () => {
        // using Java Script method to get PDF file
        fetch('/assets/ENCABO_OTILLA_SOLANOY_ACT-4.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'ENCABO_OTILLA_SOLANOY_ACT-4.pdf';
                alink.click();
            })
        })
    };

    return (
        <Card>
            <div className={styles.home}>
            <h1>Welcome to Page</h1>
            <button className={`${styles['button-64']}`} onClick={downloadHandler}><span class="text">Download</span></button>
            <Button className={styles.Button} onClick={props.onLogout}>Logout</Button>
            </div>
        </Card>
    );
};

export default Home;