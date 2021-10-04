import styles from '../../assets/styles/pageHeader.module.css';

export default function PageHeader (props) {
    const { title } = props;
    return (
        <div className="pt-6 pb-6">
            <h1 className={styles.header}>{ title || 'Teams' }</h1>
            <h2 className={styles.subtitle}>Searching all the teams of a league</h2>
        </div>
    );
}