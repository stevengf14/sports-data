import styles from '../../assets/styles/pageFooter.module.css';

export default function PageFooter (props) {

    return (
        <div className={styles.header}>
            <strong>Teams Search</strong> by Steven Guamán
            <p>Using an API from: <smal>https://www.thesportsdb.com</smal></p>
        </div>
    );
}