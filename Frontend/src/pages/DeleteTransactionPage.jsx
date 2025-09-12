import { useParams } from "react-router-dom";
import { DeleteConfirmation } from '../components';
import apiServices from "../api/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from 'react-hot-toast';

function DeleteTransactionPage() {
  const {id} = useParams();

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const onDelete = async () => {
    setIsLoading(true)
    apiServices.deleteTransaction({transactionId: id})
    .then((data) => {
      if(data?.success){
        toast.success(data?.message)
        navigate('/')
      } else {
        toast.error("Failed Deleting Transaction, Please Try Again Later")
      }
    })
    .finally(() => setIsLoading(false))
  }

  return (
    <div className='w-full h-full flex justify-center p-10 items-center'>
      <DeleteConfirmation onDelete={onDelete} isLoading={isLoading}/>
    </div>
  )
}

export default DeleteTransactionPage
