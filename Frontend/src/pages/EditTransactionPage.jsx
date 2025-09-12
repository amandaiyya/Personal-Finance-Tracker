import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import apiServices from '../api/api';
import { TransactionForm } from '../components';
import { ArrowPathIcon } from '@heroicons/react/24/solid';
import { toast } from 'react-hot-toast';

function EditTransactionPage() {
  const { id } = useParams();
  const navigate = useNavigate()

  const [transaction, setTransaction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    apiServices.updateTransaction({
      transactionId: id,
      title: data?.title,
      amount: data?.amount,
      category: data?.category,
      date: data?.date,
    })
    .then((data) => {
      if(data?.success){
        toast.success(data?.message)
        navigate('/')
      } else {
        toast.error("Failed Editing Transaction, Please Try Again Later")
      }
    })
    .finally(() => setIsSubmitting(false));
  }

  useEffect(() => {
    setIsLoading(true);
    apiServices.getTransactionById({id})
    .then(({data}) => {
      if(data){
        setTransaction(data)
      }
    })
    .catch((error) => toast.error("Something Went Wrong"))
    .finally(() => setIsLoading(false))
  },[])

  if(isLoading){
    return (
      <div className='w-full h-full flex justify-center items-center'>
        <ArrowPathIcon className='w-10 animate-spin'/>
      </div>
    )
  }

  if(!transaction && !isLoading){
    return (
      <div className='w-full h-full flex justify-center items-center p-10'>
        <p className='bg-white border border-sky-100 shadow-md rounded-md px-3 py-2'>
          Something went wrong, {' '}
          <Link to='/' className='underline text-blue-400'>Redirect to Home</Link>
        </p>
      </div>
    )
  }

  return (
    <div className='w-full flex justify-center p-10'>
      <TransactionForm transaction={transaction} onSubmit={onSubmit} isSubmitting={isSubmitting}/>
    </div>
  )
}

export default EditTransactionPage
