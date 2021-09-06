import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const transactions = [
  { id: 1, date: '2021-08-31', operationType: 'INCOME', amount: 10 },
  { id: 2, date: '2021-09-01', operationType: 'INCOME', amount: 20 },
  { id: 3, date: '2021-09-04', operationType: 'INCOME', amount: 40 },
];

function TransactionPage () {
  return (
    <>
      <Header />
      <div>Info</div>
      <Footer />
    </>
  );
}

export default TransactionPage;
