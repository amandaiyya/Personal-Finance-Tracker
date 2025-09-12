import { ExclamationCircleIcon } from "@heroicons/react/24/outline" 
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

function DeleteConfirmation({
  onDelete,
  isLoading,
}) {
  const navigate = useNavigate()

  return (
    <div className='bg-white shadow-md w-lg h-max border border-sky-100 rounded-md p-6 flex flex-col gap-5 items-center text-center'>
      <div className="w-12 h-12 relative">
        <div className="absolute top-0 w-12 h-12 rounded-full blur-xs bg-red-200"></div>
        <div className='absolute top-0 w-12 h-12 flex justify-center'>
          <ExclamationCircleIcon className="w-10 text-red-700" />
        </div>
      </div>
      <div>
        <div className="text-xl font-semibold">Delete Transaction</div>
        <div className="mt-2 mb-3">
          <p>Are you sure you want to delete this transaction?</p>
          <p>This action cannot be undone.</p>
        </div>
      </div>
      <div className="flex items-center justify-between w-full gap-3">
        <button 
          onClick={() => navigate('/')}
          className="w-1/2 border border-black rounded-md px-3 py-2 shadow-md cursor-pointer bg-black text-white"
        >Cancel</button>
        <button
          onClick={() => {
            onDelete()
          }}
          className="w-1/2 border border-red-600 rounded-md px-3 py-2 shadow-md bg-red-300 cursor-pointer flex gap-2 justify-center items-center"
        >{isLoading ? (
          <>
            <ArrowPathIcon className="w-4 animate-spin"/>{'  '}
            Loading 
          </>
        ) : "Delete"}</button>
      </div>
    </div>
  )
}

export default DeleteConfirmation
