import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTransactionsAction } from '../../../actions/actionCreator';
import Error from '../../../components/Error/Error';
import CONSTANTS from '../../../constants';

function Transactions (props) {
  const { firstName, lastName, avatar, transaction, getTransactions } = props;
  const { isFetching, error, transactions } = transaction;

  useEffect(() => {
    getTransactions();
  }, []);

  const mapTransactions = ({ id, date, operationType, amount }) => (
    <tr key={id}>
      <td>{id}</td>
      <td>{date}</td>
      <td>{operationType}</td>
      <td>{amount}</td>
    </tr>
  );

  return (
    <>
      {isFetching && <div>Loading....</div>}
      {error && (
        <div>
          <Error />
        </div>
      )}
      <table>
        <caption>
          <img
            src={
              avatar === 'anon.png'
                ? CONSTANTS.ANONYM_IMAGE_PATH
                : `${CONSTANTS.publicURL}${avatar}`
            }
            // className={styles.avatar}
            alt='user'
          />
          {lastName} {firstName}, transactions report!
        </caption>
        <thead>
          <tr>
            <th>№</th>
            <th>Date</th>
            <th>Operation</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>{transactions.map(mapTransactions)}</tbody>
      </table>
    </>
  );
}

const mapStateToProps = state => {
  const {
    transaction,
    userStore: {
      data: { lastName, firstName, avatar },
    },
  } = state;
  return { transaction, lastName, firstName, avatar };
};
const mapDicpatchToProps = dispatch => ({
  getTransactions: () => dispatch(getTransactionsAction()),
});
export default connect(mapStateToProps, mapDicpatchToProps)(Transactions);
