import styles from '../TransactionHistory/TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr className={styles.columnHead}>
          <th className={styles.columnCapt}>Type</th>
          <th className={styles.columnCapt}>Amount</th>
          <th className={styles.columnCapt}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(transaction => (
          <tr className={styles.columnBody} key={transaction.id}>
            <td className={styles.columnBodyType}>{transaction.type}</td>
            <td className={styles.columnBodyAmCur}>{transaction.amount}</td>
            <td className={styles.columnBodyAmCur}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
