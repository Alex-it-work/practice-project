import React from 'react';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import Transactions from './Transactions/Transactions.js';

function TransactionPage () {
  return (
    <>
      <Header />
      <Transactions />

      <Footer />
    </>
  );
}

export default TransactionPage;
