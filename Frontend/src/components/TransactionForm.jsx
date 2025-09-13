import { useForm } from "react-hook-form";

import { 
  ArrowPathIcon,
} from '@heroicons/react/24/solid';

// Form Component for Transaction
function TransactionForm({
  transaction = null,
  onSubmit,
  isSubmitting,
}) {
  // Using React-Hook-Form
  const { register, handleSubmit} = useForm({
    defaultValues: transaction 
      ? {...transaction, date: transaction.date?.split('T')[0]} 
      : {
          title: "",
          amount: 0,
          category: "",
          date: "",
        }
  })

  // Form Submit Handler
  const handleFormSubmit = async (data) => {
    try {
        await onSubmit(data)
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div className='bg-white shadow-md w-lg h-max border border-sky-100 rounded-md p-4'>
      <div className="text-center mb-2 sm:text-lg font-semibold">{transaction ? "Edit Transaction" : "New Transaction"}</div>

      {/* Form Integrated With React-Hook-Form */}
      <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col gap-3">
        {/* Input For Title */}
        <div>
          <label className="text-sm sm:text-base">Title</label>
          <input type="text" {...register("title")} required className="w-full outline-none border-2 border-black rounded-md py-1 px-2"/>
        </div>

        {/* Input For Amount */}
        <div>
          <label className="text-sm sm:text-base">Amount</label>
          <input type="number" {...register("amount")} required className="w-full outline-none border-2 border-black rounded-md py-1 px-2"/>
        </div>

        {/* Input For Category */}
        <div className="flex items-center gap-3 flex-wrap my-2 sm:my-0">
          <label className="text-sm sm:text-base">Category</label>
          <select {...register("category")} defaultValue="" required className="outline-none text-sm sm:text-base border-2 border-black rounded-md py-1 px-2">
            <option value="" disabled>Select</option>
            <option value="income">Income</option>
            <option value="expenses">Expenses</option>
          </select>
        </div>

        {/* Input For Date */}
        <div className="flex items-center gap-3 flex-wrap">
          <label className="text-sm sm:text-base">Transaction Date</label>
          <input type="date" {...register("date")} required className="outline-none text-sm sm:text-base border-2 border-black rounded-md py-1 px-2"/>
        </div>

        {/* Submit Button */}
        <button 
          type="submit"
          disabled={isSubmitting}
          className="bg-black hover:bg-gray-800 text-white rounded-md px-3 py-1.5 sm:py-2 text-bases sm:text-lg mt-3 cursor-pointer"
        >{isSubmitting ? (
          <div className="flex items-center justify-center gap-3">
            <ArrowPathIcon className='w-4 sm:w-5 text-white animate-spin'/>
            Loading..
          </div>
          ) : "Submit"}
        </button>
      </form>
    </div>
  )
}

export default TransactionForm
