import React from 'react';
import PropTypes from 'prop-types';

export const TransactionList = props => {
  const { transactions } = props;
  return (
    <table>
      <caption>List of transactions</caption>
      <thead>
        <tr>
          <th>Date</th>
          <th>Operation</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, date, operationType, amount }) => (
          <tr key={id}>
            <td>{date}</td>
            <td>{operationType}</td>
            <td>{amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      date: PropTypes.string,
      operatioType: PropTypes.string,
      amount: PropTypes.number,
    }).isRequired
  ),
};

export default TransactionList;
