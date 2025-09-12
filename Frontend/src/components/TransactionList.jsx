import { 
    EllipsisVerticalIcon,
    XMarkIcon,
    ArrowPathIcon,
    PlusCircleIcon,
} from '@heroicons/react/24/solid';

import {
    PlusIcon,
    MinusIcon,
    PencilIcon,
} from '@heroicons/react/24/outline';

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import apiServices from '../api/api'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const filter = {
    All: "all",
    Income: "income",
    Expenses: "expenses"
}

function TransactionList() {
    const [openItemId, setOpenItemId] = useState(null);
    const [transactions, setTransactions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)
    const [sortBy, setSortBy] = useState('all');

    const navigate = useNavigate()

    const fetchAllTransactions = async () => {
        setIsLoading(true)
        setError(null)
        
        apiServices.getTransactions()
        .then(({data}) => {
            if(data.length > 0){
                setTransactions(data)
                toast.success("Transactions Listed Successfully")
            } else {
                setError("Transactions Not Found")
            }
        })
        .catch((error) => {
            setError("Transactions Not Found")
            toast.error("Server Error")
        })
        .finally(() => setIsLoading(false))
    }

    const fetchIncomeTransactions = async (category) => {
        setIsLoading(true)
        setError(null)

        apiServices.getTransactionByCategory({category})
        .then(({data}) => {
            if(data.length > 0){
                setTransactions(data)
                toast.success("Transactions Listed Successfully")
            } else {
                setError("Transactions Not Found")
            }
        })
        .catch((error) => {
            setError("Transactions Not Found")
            toast.error("Server Error")
        })
        .finally(() => setIsLoading(false))
    }

    const fetchExpensesTransactions = async (category) => {
        setIsLoading(true)
        setError(null)

        apiServices.getTransactionByCategory({category})
        .then(({data}) => {
            if(data.length > 0){
                setTransactions(data)
                toast.success("Transactions Listed Successfully")
            } else {
                setError("Transactions Not Found")
            }
        })
        .catch((error) => {
            setError("Transactions Not Found")
            toast.error("Server Error")
        })
        .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        if(sortBy === filter.All){
            fetchAllTransactions();
        }

        if(sortBy === filter.Income){
            fetchIncomeTransactions(filter.Income);
        }

        if(sortBy === filter.Expenses){
            fetchExpensesTransactions(filter.Expenses);
        }
    },[sortBy])

  return (
    <div className='flex flex-col items-center gap-3'>
        <div className='flex items-center w-lg gap-1'>
            <Link 
            to='/add' 
            className='bg-white shadow-md p-3 flex-1 flex justify-center items-center gap-1 border border-sky-100 rounded-md hover:bg-black hover:text-white transition-colors'
            >
                <PlusCircleIcon className='w-6'/>
                Add Transaction
            </Link>
            <div className='bg-white shadow-md py-3 px-2 border border-sky-100 rounded-md'>
                <select 
                    name='sortby' 
                    required 
                    defaultValue="" 
                    onChange={(e) => setSortBy(e.target.value)}
                    className="outline-none cursor-pointer text-black bg-white"
                >
                    <option value="" disabled>Sort by</option>
                    <option value="all">All</option>
                    <option value="income">Income</option>
                    <option value="expenses">Expenses</option>
                </select>
            </div>
        </div>

        {error ? (
            <div>{error}</div>
        ) : (
            <div className='bg-white shadow-md w-lg h-max border border-sky-100 rounded-md'>
                <ul className='w-full flex flex-col items-center'>
                    {isLoading ? (
                        <div className='animate-spin p-5'>
                            <ArrowPathIcon className='w-5 text-gray-800'/>
                        </div>
                    ) : (
                        transactions.map((transaction) => (
                            <li key={transaction._id} className='w-full flex gap-4 p-3 hover:bg-gray-50'>
                                <div className={`w-4 border rounded-md shadow-sm ${
                                    transaction.category === "income"
                                        ? "bg-lime-200 border-lime-500"
                                        : "bg-red-300 border-red-500"
                                }`}></div>

                                <div className='flex-1 flex justify-between items-center relative'>
                                    <div>
                                        <p className='text-md font-semibold'>{transaction.title}</p>
                                        <span className='text-gray-500 text-sm'>{transaction.date.split('T')[0]}</span>
                                    </div>

                                    <div className='flex items-center'>
                                        <div 
                                        className={`text-lg font-semibold flex items-center ${
                                            transaction.category === "income"
                                                ? "text-lime-500" 
                                                : "text-red-500"
                                        }`}>
                                            {transaction.category === "income" ? (
                                                <>
                                                    <PlusIcon className='w-3 stroke-4'/>
                                                    <span>&#8377;{transaction.amount}</span>
                                                </>
                                            ) : (
                                                <>
                                                    <MinusIcon className='w-3 stroke-4'/>
                                                    <span>&#8377;{transaction.amount}</span>
                                                </>
                                            )}
                                        </div>

                                        <button 
                                            onClick={() => (
                                                setOpenItemId(openItemId === transaction._id ? null : transaction._id)
                                            )}
                                            className='cursor-pointer'
                                        >
                                            <EllipsisVerticalIcon className='w-6 text-gray-500'/>
                                        </button>
                                    </div>

                                    {openItemId === transaction._id && (
                                        <div className='p-3 border border-sky-100 absolute top-[-1] right-0 bg-white shadow-sm rounded-md flex justify-around gap-2 text-gray-700'>
                                            <button 
                                                onClick={() => (
                                                    navigate(`/${transaction._id}/edit`)
                                                )}
                                                className='border border-sky-500 rounded-md px-2 py-1 bg-sky-100 flex items-center gap-1 cursor-pointer'
                                            >
                                                edit
                                                <PencilIcon className='w-4'/>
                                            </button>

                                            <button 
                                                onClick={() => (
                                                    navigate(`/${transaction._id}/delete`)
                                                )}
                                                className='border border-red-600 rounded-md px-2 py-1 bg-red-300 cursor-pointer'
                                            >
                                                remove
                                            </button>

                                            <button 
                                                onClick={() => (
                                                    setOpenItemId(null)
                                                )}
                                                className='cursor-pointer'
                                            >
                                                <XMarkIcon className='w-6 font-bold'/>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        )} 
    </div>
  )
}

export default TransactionList
