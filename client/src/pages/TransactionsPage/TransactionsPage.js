import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import TransactionList from './TransactionList/TransactionList';
import styles from '../TransactionsPage/TransactionList/TransactionsList.module.sass';
import { getTransactionsAction } from '../../actions/actionCreator';

function TransactionPage (props) {
  const { isFetching, error, transactions, getTransactions } = props;

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <>
      <Header />
      <section className={styles.transactionsListContainer}>
        <TransactionList transactions={transactions} />
      </section>

      <Footer />
    </>
  );
}

const mapStateToProps = state => state.transaction;

const mapDicpatchToProps = dispatch => ({
  getTransactions: () => dispatch(getTransactionsAction()),
});

export default connect(mapStateToProps, mapDicpatchToProps)(TransactionPage);
