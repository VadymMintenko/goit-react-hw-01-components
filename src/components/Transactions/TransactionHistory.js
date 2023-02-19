import PropTypes from 'prop-types';
import { TransTable } from './Transactions.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <TransTable className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(element => {
          return (
            <tr key={element.id}>
              <td>{element.type}</td>
              <td>{element.amount}</td>
              <td>{element.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </TransTable>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
