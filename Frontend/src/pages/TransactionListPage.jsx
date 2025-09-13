import React from 'react';
import { TransactionList } from '../components';

// Page for Listing All Transactions
function TransactionListPage() {
  return (
    <div className='w-full flex justify-center py-10 px-5 sm:p-10'>
      {/* Transaction List Component */}
      <TransactionList />
    </div>
  )
}

export default TransactionListPage
