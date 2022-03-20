import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import Transaction from '../TransactionItem/TransactionItem';

const TransactionList = () => {

  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {transactions.map(el => (
          <Transaction key={el.id} transaction={el} />
        ))}
      </ul>
    </>

  )
}

export default TransactionList