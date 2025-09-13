import React, { useState } from 'react'
import { TransactionForm } from '../components'
import apiServices from '../api/api';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

// Page to Add New Transaction
function AddTransactionPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const navigate = useNavigate()

  // Form Submit Handler for Adding New Transaction
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    apiServices.addTransaction(data)
    .then((data) => {
      if(data?.success){
        toast.success("Transaction Added Successfully")
        navigate('/')
      } else {
        toast.error("Failed Adding Transaction, Please Try Again Later")
      }
    })
    .finally(() => setIsSubmitting(false));
  }

  return (
    <div className='w-full flex justify-center p-10'>
      {/* Transacton Form Component */}
      <TransactionForm onSubmit={onSubmit} isSubmitting={isSubmitting}/>
    </div>
  )
}

export default AddTransactionPage
